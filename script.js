// ==UserScript==
// @name         Canvas Speedgrade better keybinds
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Add keybinds to canvas speedgraded to allow faster grading
// @author       TadMaj
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
// @match        http*://canvas.*.*/courses/*/gradebook/speed_grader?assignment_id=*&student_id=*
// @grant        none
// ==/UserScript==

function allowSwitch() {
  return $(":focus") != $("#add_a_comment") && $(":focus") != $("#grading-box-extended")
}

(function() {
    'use strict';

    document.addEventListener('keydown', (event) => {
        const keyName = event.key;
        if (keyName == '`') {
            document.activeElement.blur();
            return;
        }

        if (keyName == "]") {
            $("#next-student-button").click();
            return;
        }

        if (keyName == "[") {
            $("#prev-student-button").click();
            return;
        }

        if (event.shiftKey && keyName == "Enter" && $(":focus") != $("#add_a_comment")) {
            $("#comment_submit_button").click();
            return;
        }


    }, false);
})();
