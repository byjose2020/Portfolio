 const passwordInput = document.getElementById('password');
                const ojobutton = document.getElementById('ojo', 'ojo2');

                ojobutton.addEventListener('click', function(){
                    if (passwordInput.type === 'password') {
                        passwordInput.type = 'text';
                        ojobutton.textContent = '👁️';
                    } else {
                        passwordInput.type = 'password';
                        ojobutton.textContent = '🙈';
                    }
                });