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

const output = {

    saveInfoTextToTXT(fileName) {

        let file = fileName === undefined ? 'artwork.txt' : fileName.toLowerCase();
        let ext = '.txt';
        let a = document.createElement('a');

        let blob = new Blob([this.getInfoText()], { type: 'text/plain' });

        document.body.appendChild(a);

        a.style.display = 'none';
        a.href = (window.webkitURL || window.URL).createObjectURL(blob);
        a.download = (file.endsWith(ext) ? file : file + ext);
        a.target = '_blank';
        a.click();
        a.remove();
    },

    saveToSVG(svgNode, fileName) {

        const URLObj = window.URL || window.webkitURL;
        const file = fileName === undefined ? 'artwork.svg' : fileName;
        const ext = '.svg';
        
        const svgNodeClone = svgNode.cloneNode(true);

        let serializer;
        let svgData;
        let blob;
        let link;
        let url;

        // remove styles
        // remove x and y values
        svgNodeClone.removeAttributeNS(null, 'style');
        svgNodeClone.removeAttributeNS(null, 'x');
        svgNodeClone.removeAttributeNS(null, 'y');

        // make blob
        serializer = new XMLSerializer();
        svgData = this.XML_HEADER + serializer.serializeToString(svgNodeClone);

        // clip-path hack
        // this : style="clip-path: url("#artwork-clipPath");"
        //      : style="clip-path: url(&quot;#artwork-clipPath&quot;);"
        //
        // changes to this : style="clip-path: url(#artwork-clipPath);"
        svgData = svgData.replace(/&quot;/g, '');

        blob = new Blob([svgData], { 'type': 'image/svg+xml' });
        url = URLObj.createObjectURL(blob);
        
        link = document.createElement('a');
        document.body.appendChild(link);
        link.type = 'image/svg+xml';
        link.style = 'display: none;';
        link.href = url;
        link.download = file.endsWith(ext) ? file : file + ext;
        link.target = '_blank';
        link.click();
        link.remove();

        URLObj.revokeObjectURL(url);

        return this;
    }
}


// EXPORTS
// =================================================================================================

export { output };
