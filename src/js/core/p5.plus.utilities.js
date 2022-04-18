/* ============================================================================================== */
/*                                                                                                */
/* Copyright 2022 Kris HEYSE                                                                      */
/*                                                                                                */
/* Licensed under the Apache License, Version 2.0 (the "License");                                */
/* you may not use this file except in compliance with the License.                               */
/* You may obtain a copy of the License at                                                        */
/*                                                                                                */
/* http://www.apache.org/licenses/LICENSE-2.0                                                     */
/*                                                                                                */
/* Unless required by applicable law or agreed to in writing, software                            */
/* distributed under the License is distributed on an "AS IS" BASIS,                              */
/* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.                       */
/* See the License for the specific language governing permissions and                            */
/* limitations under the License.                                                                 */
/*                                                                                                */
/* ============================================================================================== */


// EXTENSION
// =================================================================================================

const utilities = {

    __removeComments(node) {

        // SOURCE:
        // https://www.sitepoint.com/removing-useless-nodes-from-the-dom/
    
        for (let n = 0; n < node.childNodes.length; n++) {
    
            let child = node.childNodes[n];
    
            if (child.nodeType === Node.COMMENT_NODE) { // 8
    
                node.removeChild(child);
                n--;
    
            } else if (child.nodeType === Node.ELEMENT_NODE) { // 1
    
                this.__removeComments(child);
            }
        }
    },

    __splitCssValue(cssValue) {

        const arr = cssValue.match(/^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/);
        return { cssValue: arr[0], value: arr[1], units: arr[2] };
    },

    __convertUnits(numValue, fromUnits, toUnits, resolution) {

        const unitTable = {

            'mm': {
                'mm': 1.00,
                'cm': 10.0,
                'in': 25.4,
                'px': 25.4 / resolution
            },

            'cm': {
                'mm': 0.10,
                'cm': 1.00,
                'in': 2.54,
                'px': 2.54 / resolution
            },

            'in': {
                'mm': 1.00 / 25.4,
                'cm': 1.00 / 2.54,
                'in': 1.00,
                'px': 1.00 / resolution
            },

            'px': {
                'mm': resolution / 25.4,
                'cm': resolution / 2.54,
                'in': resolution,
                'px': 1.00
            }
        }

        const retVal = numValue * unitTable[toUnits][fromUnits];

        if (retVal == undefined) {

            throw new Error('Resolution is required if you want to convert to/from pixels(px)');
        }

        return retVal;
    },

    __getHtmlFragment(htmlString) {
        
        // SOURCE:
        // https://love2dev.com/blog/inserting-html-using-createdocumentfragment-instead-of-using-jquery/

        let frag = document.createDocumentFragment();
        let temp = document.createElement('div');
    
        temp.innerHTML = htmlString;
    
        while (temp.firstChild) {
    
            frag.appendChild(temp.firstChild);
        }
    
        return (frag);
    },

    __getDateString() {

        let d = new Date();

        return d.getFullYear() +
            ('' + (d.getMonth() + 1)).padStart(2, '0') +
            ('' + d.getDate()).padStart(2, '0') + '-' +
            ('' + d.getHours()).padStart(2, '0') +
            ('' + d.getMinutes()).padStart(2, '0') +
            ('' + d.getSeconds()).padStart(2, '0');
    },

    __searchNodeByXPath(text, node = document, tag = 'div') {

        const xPath = `//${tag}[text()='${text}']`;
        return document.evaluate(xPath, node, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    },

    __searchNodeByText(text, node = document, tag = 'div') {

        let tags = node.getElementsByTagName(tag);
        let result;

        for (var i = 0; i < tags.length; i++) {
            if (tags[i].textContent == text) {
                result = tags[i];
                break;
            }
        }

        return result;
    },

    __getFlatArray(inArray) {

        let size = 0;
    
        for (let i = 0; i < inArray.length; i++) {
    
            let current = inArray[i];
    
            for (let j = 0; j < current.length; j++) {
    
                size++;
            }
        }
        
        let outArray = new Array(size);
        let k = 0;
    
        for (let i = 0; i < inArray.length; i++) {
    
            let current = inArray[i];
    
            for (let j = 0; j < current.length; j++) {
    
                outArray[k++] = current[j];
            }
        }
    
        return outArray;
    }
}


// EXPORT
// =================================================================================================

export { utilities };
