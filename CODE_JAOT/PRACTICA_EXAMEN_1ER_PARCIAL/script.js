        document.addEventListener('DOMContentLoaded', function() {
            const bolitas = [
                { element: document.getElementById('bolita1'), velocidad: 0, posicion: 0, id: 1 },
                { element: document.getElementById('bolita2'), velocidad: 0, posicion: 0, id: 2 },
                { element: document.getElementById('bolita3'), velocidad: 0, posicion: 0, id: 3 }
            ];
            
            const ganadorElement = document.getElementById('ganador');
            const btnIniciar = document.getElementById('iniciar');
            const btnReiniciar = document.getElementById('reiniciar');
            const audioGanador = document.getElementById('audio-ganador');
            const pistaWidth = document.querySelector('.pista').offsetWidth - 50;
            let carreraActiva = false;
            let ganador = null;
            let animationId;

            function iniciarCarrera() {
                if (carreraActiva) return;
                
                carreraActiva = true;
                ganador = null;
                ganadorElement.textContent = '';
                
                // Asignar velocidades aleatorias a cada bolita
                bolitas.forEach(bolita => {
                    bolita.velocidad = Math.random() * 3 + 1;
                    bolita.posicion = 0;
                    bolita.element.style.left = '10px';
                });
                
                moverBolitas();
            }

            function moverBolitas() {
                if (ganador) return;
                
                bolitas.forEach(bolita => {
                    if (!ganador) {
                        bolita.posicion += bolita.velocidad;
                        bolita.element.style.left = `${bolita.posicion}px`;
                        
                        // Verificar si llegó a la meta
                        if (bolita.posicion >= pistaWidth) {
                            ganador = bolita.id;
                            finalizarCarrera();
                        }
                    }
                });
                
                if (!ganador) {
                    animationId = requestAnimationFrame(moverBolitas);
                }
            }

            function finalizarCarrera() {
                carreraActiva = false;
                cancelAnimationFrame(animationId);
                
                // Mostrar ganador
                let color;
                switch(ganador) {
                    case 1: color = 'roja'; break;
                    case 2: color = 'verde'; break;
                    case 3: color = 'azul'; break;
                }
                ganadorElement.textContent = `¡La bolita ${color} ha ganado!`;
                ganadorElement.style.color = getComputedStyle(bolitas[ganador-1].element).backgroundColor;
                
                // Reproducir sonido de ganador
                audioGanador.play();
            }

            function reiniciarCarrera() {
                carreraActiva = false;
                ganador = null;
                cancelAnimationFrame(animationId);
                
                bolitas.forEach(bolita => {
                    bolita.posicion = 0;
                    bolita.element.style.left = '10px';
                });
                
                ganadorElement.textContent = '';
                audioGanador.pause();
                audioGanador.currentTime = 0;
            }

            btnIniciar.addEventListener('click', iniciarCarrera);
            btnReiniciar.addEventListener('click', reiniciarCarrera);
        });