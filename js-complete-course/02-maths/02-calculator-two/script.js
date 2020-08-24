/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
        // to get the value of an input: document.getElementById("element-id").value

        var performOperation = function (operation) {
            var x = +document.getElementById("op-one").value;
            var y = +document.getElementById("op-two").value;
            switch (operation) {
                case 'addition':
                    z = x + y;
                    alert(z);
                    break
                case 'substraction':
                    z = x - y;
                    alert(z);
                    break;
                case 'multiplication':
                    z = x * y;
                    alert(z);
                    break;
                case 'division':
                    z = x / y;
                    alert(z);
                    break;
            }
        };

        Array.from(document.querySelectorAll("button.operator")).forEach(function ($btn) {
            $btn.addEventListener("click", function () {
                performOperation($btn.id);
            });
        });
    }
)

();