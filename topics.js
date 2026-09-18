const topics = [
    {
        id: 'enteros',
        title: 'Números Enteros',
        icon: '🔢',
        description: 'Números positivos, negativos y el cero',
        content: `
            <h3>¿Qué son los Números Enteros?</h3>
            <p>Los <strong>números enteros</strong> incluyen los números positivos, los negativos y el cero. Se usan para representar cantidades que pueden ser "más" o "menos" que cero.</p>
            
            <div class="football-context">
                <span class="context-title">⚽ Contexto Fútbol</span>
                <p>En una tabla de posiciones, si un equipo tiene <strong>+5</strong> en diferencia de gol, significa que metió 5 goles más de los que recibió. Si tiene <strong>-3</strong>, recibió 3 goles más de los que metió.</p>
            </div>

            <h4>La Recta Numérica</h4>
            <p>Los enteros se pueden representar en una <strong>recta numérica</strong>:</p>
            
            <div class="diagram-container">
                <svg viewBox="0 0 600 120" class="diagram-svg">
                    <line x1="50" y1="60" x2="550" y2="60" stroke="#333" stroke-width="2"/>
                    <polygon points="550,60 540,55 540,65" fill="#333"/>
                    <polygon points="50,60 60,55 60,65" fill="#333"/>
                    
                    <!-- Markings -->
                    <line x1="100" y1="55" x2="100" y2="65" stroke="#333" stroke-width="2"/>
                    <text x="100" y="85" text-anchor="middle" font-size="14" fill="#333">-5</text>
                    
                    <line x1="180" y1="55" x2="180" y2="65" stroke="#333" stroke-width="2"/>
                    <text x="180" y="85" text-anchor="middle" font-size="14" fill="#333">-3</text>
                    
                    <line x1="260" y1="55" x2="260" y2="65" stroke="#333" stroke-width="2"/>
                    <text x="260" y="85" text-anchor="middle" font-size="14" fill="#333">-1</text>
                    
                    <line x1="300" y1="50" x2="300" y2="70" stroke="#c62828" stroke-width="3"/>
                    <text x="300" y="85" text-anchor="middle" font-size="16" fill="#c62828" font-weight="bold">0</text>
                    
                    <line x1="340" y1="55" x2="340" y2="65" stroke="#333" stroke-width="2"/>
                    <text x="340" y="85" text-anchor="middle" font-size="14" fill="#333">1</text>
                    
                    <line x1="420" y1="55" x2="420" y2="65" stroke="#333" stroke-width="2"/>
                    <text x="420" y="85" text-anchor="middle" font-size="14" fill="#333">3</text>
                    
                    <line x1="500" y1="55" x2="500" y2="65" stroke="#333" stroke-width="2"/>
                    <text x="500" y="85" text-anchor="middle" font-size="14" fill="#333">5</text>
                    
                    <text x="300" y="30" text-anchor="middle" font-size="12" fill="#666">Los negativos están a la izquierda del 0</text>
                    <text x="300" y="105" text-anchor="middle" font-size="12" fill="#666">Los positivos están a la derecha del 0</text>
                </svg>
            </div>

            <h4>Valor Absoluto</h4>
            <p>El <strong>valor absoluto</strong> de un número es su distancia al cero, sin importar el signo. Se escribe entre barras: |−4| = 4</p>
            
            <div class="example-box">
                <span class="example-title">📌 Ejemplo</span>
                <p>|−7| = 7 &nbsp;&nbsp;&nbsp; |+5| = 5 &nbsp;&nbsp;&nbsp; |0| = 0</p>
                <p>Como en el fútbol: si un equipo perdió por 3 goles o ganó por 3 goles, la <strong>diferencia</strong> es la misma: 3 goles.</p>
            </div>

            <h4>Comparación de Enteros</h4>
            <p>En la recta numérica, el número más a la <strong>derecha</strong> es el mayor:</p>
            <ul>
                <li>−2 > −5 (porque −2 está más a la derecha)</li>
                <li>−1 < +3</li>
                <li>−4 < 0 < +2</li>
            </ul>

            <h4>Operaciones con Enteros</h4>
            
            <h4>Suma y Resta</h4>
            <ul>
                <li><strong>Mismo signo:</strong> sumo los valores absolutos y conservo el signo.<br>
                (−4) + (−2) = −6 &nbsp;&nbsp;&nbsp; (+5) + (+3) = +8</li>
                <li><strong>Distinto signo:</strong> resto los valores absolutos y pongo el signo del mayor.<br>
                (−7) + (+4) = −3 &nbsp;&nbsp;&nbsp; (+9) + (−5) = +4</li>
            </ul>

            <div class="example-box">
                <span class="example-title">📌 Ejemplo Fútbol</span>
                <p>Un equipo tenía −5 de diferencia de gol. En el próximo partido ganó 3 a 1 (diferencia +2).</p>
                <p>Nueva diferencia: (−5) + (+2) = <strong>−3</strong></p>
            </div>

            <h4>Multiplicación y División</h4>
            <p><strong>Regla de los signos:</strong></p>
            <ul>
                <li>(+) × (+) = (+) &nbsp;&nbsp;&nbsp; (−) × (−) = (+)</li>
                <li>(+) × (−) = (−) &nbsp;&nbsp;&nbsp; (−) × (+) = (−)</li>
            </ul>
            <p>La misma regla aplica para la división.</p>

            <div class="tip-box">
                <span class="tip-title">💡 Truco</span>
                <p>"<strong>Más por más, más. Menos por menos, más. Distinto signo, siempre menos.</strong>"</p>
                <p>Piensa que dos cosas malas juntas (dos negativos) dan algo bueno (positivo) ¡como dos barridas en el fútbol que terminan en gol!</p>
            </div>

            <h4>Potenciación con Enteros</h4>
            <p>La potencia es una multiplicación repetida:</p>
            <ul>
                <li>(−2)³ = (−2) × (−2) × (−2) = −8</li>
                <li>(−3)² = (−3) × (−3) = +9</li>
            </ul>
            <p><strong>Importante:</strong> si el exponente es par, el resultado es positivo. Si es impar, conserva el signo.</p>
        `
    },
    {
        id: 'fracciones',
        title: 'Fracciones y Decimales',
        icon: '🍕',
        description: 'Operaciones y conversiones',
        content: `
            <h3>Fracciones</h3>
            <p>Una <strong>fracción</strong> representa una parte de un todo. Tiene dos números:</p>
            <ul>
                <li><strong>Numerador</strong> (arriba): partes que tomamos</li>
                <li><strong>Denominador</strong> (abajo): partes totales en las que dividimos</li>
            </ul>

            <div class="football-context">
                <span class="context-title">⚽ Contexto Fútbol</span>
                <p>Un partido dura 90 minutos. Si el delantero jugó 60 minutos, jugó <strong>60/90 = 2/3</strong> del partido.</p>
            </div>

            <div class="diagram-container">
                <svg viewBox="0 0 500 150" class="diagram-svg">
                    <!-- Fraction visualization -->
                    <rect x="50" y="30" width="120" height="80" fill="#e3f2fd" stroke="#1565c0" stroke-width="2"/>
                    <line x1="50" y1="70" x2="170" y2="70" stroke="#1565c0" stroke-width="2"/>
                    <line x1="90" y1="30" x2="90" y2="110" stroke="#1565c0" stroke-width="2"/>
                    <line x1="130" y1="30" x2="130" y2="110" stroke="#1565c0" stroke-width="2"/>
                    <rect x="50" y="30" width="80" height="40" fill="#64b5f6" opacity="0.5"/>
                    <text x="110" y="25" text-anchor="middle" font-size="14" fill="#333">2/3 del rectángulo</text>
                    
                    <text x="250" y="60" font-size="16" fill="#333">2</text>
                    <line x1="240" y1="70" x2="280" y2="70" stroke="#333" stroke-width="2"/>
                    <text x="250" y="95" font-size="16" fill="#333">3</text>
                    
                    <text x="300" y="75" font-size="14" fill="#666">= Dos partes de tres</text>
                </svg>
            </div>

            <h4>Fracciones Equivalentes</h4>
            <p>Son fracciones que representan la misma cantidad. Las obtenemos multiplicando o dividiendo numerador y denominador por el mismo número:</p>
            <div class="example-box">
                <span class="example-title">📌 Ejemplo</span>
                <p>1/2 = 2/4 = 3/6 = 4/8</p>
                <p>Como en el fútbol: meter 1 gol en 2 partidos es lo mismo que meter 2 goles en 4 partidos (mismo promedio).</p>
            </div>

            <h4>Simplificar Fracciones</h4>
            <p>Dividir numerador y denominador por su máximo común divisor (MCD):</p>
            <div class="example-box">
                <span class="example-title">📌 Ejemplo</span>
                <p>12/18 = (12÷6)/(18÷6) = <strong>2/3</strong></p>
                <p>MCD(12, 18) = 6</p>
            </div>

            <h4>Operaciones con Fracciones</h4>
            
            <h4>Suma y Resta</h4>
            <p>Necesitamos <strong>común denominador</strong>:</p>
            <div class="example-box">
                <span class="example-title">📌 Ejemplo</span>
                <p>1/4 + 1/6 = 3/12 + 2/12 = <strong>5/12</strong></p>
                <p>mcm(4, 6) = 12</p>
            </div>

            <h4>Multiplicación</h4>
            <p>Multiplicamos numerador con numerador y denominador con denominador:</p>
            <div class="example-box">
                <span class="example-title">📌 Ejemplo</span>
                <p>2/3 × 3/5 = (2×3)/(3×5) = 6/15 = <strong>2/5</strong></p>
            </div>

            <h4>División</h4>
            <p>Multiplicamos por la <strong>inversa</strong> (recíproca):</p>
            <div class="example-box">
                <span class="example-title">📌 Ejemplo</span>
                <p>2/3 ÷ 4/5 = 2/3 × 5/4 = 10/12 = <strong>5/6</strong></p>
            </div>

            <h4>Números Decimales</h4>
            <p>Son otra forma de escribir fracciones con denominador 10, 100, 1000, etc.</p>
            
            <div class="example-box">
                <span class="example-title">📌 Conversión Fracción → Decimal</span>
                <p>3/4 = 0.75 (divido 3 ÷ 4)</p>
                <p>1/8 = 0.125</p>
            </div>

            <div class="example-box">
                <span class="example-title">📌 Conversión Decimal → Fracción</span>
                <p>0.6 = 6/10 = <strong>3/5</strong></p>
                <p>0.25 = 25/100 = <strong>1/4</strong></p>
                <p>1.5 = 15/10 = <strong>3/2</strong> (número mixto: 1½)</p>
            </div>

            <h4>Operaciones con Decimales</h4>
            <p><strong>Suma y resta:</strong> alineamos la coma decimal:</p>
            <div class="example-box">
                <span class="example-title">📌 Ejemplo</span>
                <p>  2.45<br>+ 1.30<br>= 3.75</p>
            </div>

            <p><strong>Multiplicación:</strong> multiplico como enteros, luego coloco la coma:</p>
            <div class="example-box">
                <span class="example-title">📌 Ejemplo</span>
                <p>1.2 × 0.3 = 0.36 (1+1 = 2 decimales en el resultado)</p>
            </div>

            <p><strong>División:</strong> multiplico dividendo y divisor por la potencia de 10 necesaria para que el divisor sea entero:</p>
            <div class="example-box">
                <span class="example-title">📌 Ejemplo</span>
                <p>4.5 ÷ 0.5 = 45 ÷ 5 = <strong>9</strong></p>
            </div>

            <div class="tip-box">
                <span class="tip-title">💡 Tip</span>
                <p>Para comparar fracciones, convertilas a decimal o buscá un común denominador. ¡Es como comparar estadísticas de jugadores!</p>
            </div>
        `
    },
    {
        id: 'porcentajes',
        title: 'Porcentajes y Proporciones',
        icon: '📊',
        description: 'Porcentajes, regla de tres simple',
        content: `
            <h3>Porcentajes (%)</h3>
            <p>Un <strong>porcentaje</strong> es una fracción con denominador 100. El símbolo % significa "por cada 100".</p>

            <div class="football-context">
                <span class="context-title">⚽ Contexto Fútbol</span>
                <p>Si un jugador metió 20 goles de 50 tiros al arco, su efectividad es:<br>
                20/50 = 0.40 = <strong>40%</strong></p>
            </div>

            <h4>Conversión Porcentaje ↔ Decimal ↔ Fracción</h4>
            <div class="example-box">
                <span class="example-title">📌 Ejemplos</span>
                <ul>
                    <li>25% = 25/100 = 0.25 = 1/4</li>
                    <li>75% = 75/100 = 0.75 = 3/4</li>
                    <li>10% = 10/100 = 0.10 = 1/10</li>
                    <li>50% = 50/100 = 0.50 = 1/2</li>
                </ul>
            </div>

            <h4>Cálculo de Porcentajes</h4>
            <p>Para calcular el <strong>% de un número</strong>, multiplico el número por el porcentaje (en decimal):</p>
            <div class="example-box">
                <span class="example-title">📌 Ejemplo</span>
                <p>20% de 150 = 150 × 0.20 = <strong>30</strong></p>
                <p>15% de 80 = 80 × 0.15 = <strong>12</strong></p>
            </div>

            <h4>Aumentos y Descuentos</h4>
            <p><strong>Aumento:</strong> multiplico por (1 + porcentaje)</p>
            <p><strong>Descuento:</strong> multiplico por (1 − porcentaje)</p>
            <div class="example-box">
                <span class="example-title">📌 Ejemplo</span>
                <p>Una camiseta de fútbol cuesta $800. Con 20% de descuento:<br>
                Precio final = 800 × (1 − 0.20) = 800 × 0.80 = <strong>$640</strong></p>
            </div>

            <h4>Proporciones</h4>
            <p>Una <strong>proporción</strong> es una igualdad entre dos razones (o cocientes):</p>
            <p style="text-align:center; font-size:1.2rem; margin:16px 0;">
                a/b = c/d &nbsp;&nbsp; o &nbsp;&nbsp; a : b = c : d
            </p>
            <p>Se lee "a es a b como c es a d".</p>

            <div class="example-box">
                <span class="example-title">📌 Ejemplo</span>
                <p>Si 2 goles en 3 partidos, entonces 4 goles en 6 partidos:<br>
                2/3 = 4/6 ✓</p>
            </div>

            <h4>Propiedad Fundamental</h4>
            <p>En toda proporción, el <strong>producto de los extremos</strong> es igual al <strong>producto de los medios</strong>:</p>
            <p style="text-align:center; font-size:1.2rem; margin:16px 0;">
                a × d = b × c
            </p>

            <h4>Regla de Tres Simple</h4>
            <p>La <strong>regla de tres</strong> nos permite encontrar un valor desconocido en una proporción.</p>
            
            <h4>Directa (cuando aumenta una, aumenta la otra):</h4>
            <div class="example-box">
                <span class="example-title">📌 Ejemplo</span>
                <p>Si 3 jugadores marcan 12 goles, ¿cuántos goles marcarán 5 jugadores?</p>
                <p>3 jugadores → 12 goles<br>
                5 jugadores → x goles</p>
                <p>x = (5 × 12) / 3 = <strong>20 goles</strong></p>
            </div>

            <h4>Inversa (cuando aumenta una, disminuye la otra):</h4>
            <div class="example-box">
                <span class="example-title">📌 Ejemplo</span>
                <p>Si 4 jugadores tardan 6 días en preparar la cancha, ¿cuánto tardarán 8 jugadores?</p>
                <p>4 jugadores → 6 días<br>
                8 jugadores → x días</p>
                <p>x = (4 × 6) / 8 = <strong>3 días</strong></p>
                <p>(Más jugadores = menos días)</p>
            </div>

            <div class="tip-box">
                <span class="tip-title">💡 Cómo distinguir Directa de Inversa</span>
                <p><strong>Directa:</strong> Si uno aumenta, el otro también (más jugadores = más goles).</p>
                <p><strong>Inversa:</strong> Si uno aumenta, el otro disminuye (más jugadores = menos tiempo).</p>
            </div>
        `
    },
    {
        id: 'ecuaciones',
        title: 'Ecuaciones de Primer Grado',
        icon: '🔍',
        description: 'Resolver ecuaciones y problemas',
        content: `
            <h3>¿Qué es una Ecuación?</h3>
            <p>Una <strong>ecuación</strong> es una igualdad donde hay una o más incógnitas (letras). Resolverla significa encontrar el valor de la incógnita.</p>

            <div class="example-box">
                <span class="example-title">📌 Ejemplo</span>
                <p>x + 5 = 12</p>
                <p>Solución: x = 12 − 5 = <strong>7</strong></p>
            </div>

            <div class="football-context">
                <span class="context-title">⚽ Contexto Fútbol</span>
                <p>"Un equipo ganó x partidos, empató 3 y perdió 2. Jugó 15 partidos en total."</p>
                <p>Ecuación: x + 3 + 2 = 15</p>
                <p>Solución: x = 15 − 5 = <strong>10 partidos ganados</strong></p>
            </div>

            <h4>Lenguaje Algebraico</h4>
            <p>Traducir frases a ecuaciones:</p>
            <table style="width:100%; border-collapse:collapse; margin:16px 0;">
                <tr style="background:#e3f2fd;">
                    <th style="padding:10px; border:1px solid #bbb; text-align:left;">Frase</th>
                    <th style="padding:10px; border:1px solid #bbb; text-align:left;">Ecuación</th>
                </tr>
                <tr>
                    <td style="padding:10px; border:1px solid #bbb;">Un número</td>
                    <td style="padding:10px; border:1px solid #bbb;">x</td>
                </tr>
                <tr style="background:#f9f9f9;">
                    <td style="padding:10px; border:1px solid #bbb;">El doble de un número</td>
                    <td style="padding:10px; border:1px solid #bbb;">2x</td>
                </tr>
                <tr>
                    <td style="padding:10px; border:1px solid #bbb;">El triple de un número</td>
                    <td style="padding:10px; border:1px solid #bbb;">3x</td>
                </tr>
                <tr style="background:#f9f9f9;">
                    <td style="padding:10px; border:1px solid #bbb;">La mitad de un número</td>
                    <td style="padding:10px; border:1px solid #bbb;">x/2</td>
                </tr>
                <tr>
                    <td style="padding:10px; border:1px solid #bbb;">Un número aumentado en 5</td>
                    <td style="padding:10px; border:1px solid #bbb;">x + 5</td>
                </tr>
                <tr style="background:#f9f9f9;">
                    <td style="padding:10px; border:1px solid #bbb;">Un número disminuido en 3</td>
                    <td style="padding:10px; border:1px solid #bbb;">x − 3</td>
                </tr>
            </table>

            <h4>Cómo Resolver Ecuaciones</h4>
            <p><strong>Principio:</strong> lo que hago de un lado, lo hago del otro. Busco dejar la x sola.</p>

            <h4>Paso a paso:</h4>
            <ol>
                <li>Simplificar (quitar paréntesis, sumar términos semejantes)</li>
                <li>Pasar los números al otro lado (cambian de signo)</li>
                <li>Pasar las x al otro lado (cambian de signo)</li>
                <li>Despejar x</li>
                <li><strong>Verificar</strong> reemplazando el valor en la ecuación original</li>
            </ol>

            <div class="example-box">
                <span class="example-title">📌 Ejemplo 1</span>
                <p>x + 7 = 15</p>
                <p>x = 15 − 7</p>
                <p>x = <strong>8</strong></p>
                <p>Verificación: 8 + 7 = 15 ✓</p>
            </div>

            <div class="example-box">
                <span class="example-title">📌 Ejemplo 2</span>
                <p>3x = 21</p>
                <p>x = 21 ÷ 3</p>
                <p>x = <strong>7</strong></p>
                <p>Verificación: 3 × 7 = 21 ✓</p>
            </div>

            <div class="example-box">
                <span class="example-title">📌 Ejemplo 3 (con x en ambos lados)</span>
                <p>5x + 3 = 2x + 12</p>
                <p>5x − 2x = 12 − 3</p>
                <p>3x = 9</p>
                <p>x = <strong>3</strong></p>
                <p>Verificación: 5(3) + 3 = 18 y 2(3) + 12 = 18 ✓</p>
            </div>

            <div class="example-box">
                <span class="example-title">📌 Ejemplo 4 (con paréntesis)</span>
                <p>2(x + 4) = 18</p>
                <p>2x + 8 = 18</p>
                <p>2x = 18 − 8</p>
                <p>2x = 10</p>
                <p>x = <strong>5</strong></p>
            </div>

            <h4>Resolución de Problemas</h4>
            <p><strong>Estrategia:</strong></p>
            <ol>
                <li>Leer y entender el problema</li>
                <li>Identificar la incógnita (¿qué busco?)</li>
                <li>Plantear la ecuación</li>
                <li>Resolver</li>
                <li>Verificar y responder</li>
            </ol>

            <div class="example-box">
                <span class="example-title">📌 Problema</span>
                <p>"En un torneo, un equipo ganó el doble de partidos de los que empató. Si jugó 18 partidos y perdió 3, ¿cuántos ganó y cuántos empató?"</p>
                <p>Empatados = x<br>
                Ganados = 2x<br>
                Perdidos = 3<br>
                Total: x + 2x + 3 = 18</p>
                <p>3x = 15<br>
                x = <strong>5 empatados</strong><br>
                2x = <strong>10 ganados</strong></p>
            </div>

            <div class="tip-box">
                <span class="tip-title">💡 Consejo</span>
                <p>Siempre verificá tu respuesta reemplazando en la ecuación original. ¡Es como revisar si el gol fue válido antes de festejar!</p>
            </div>
        `
    },
    {
        id: 'geometria',
        title: 'Geometría',
        icon: '📐',
        description: 'Figuras, áreas, perímetros y volúmenes',
        content: `
            <h3>Ángulos</h3>
            <p>Un <strong>ángulo</strong> se forma por dos semirrectas con el mismo origen (vértice).</p>

            <div class="diagram-container">
                <svg viewBox="0 0 400 180" class="diagram-svg">
                    <!-- Acute angle -->
                    <line x1="80" y1="140" x2="160" y2="140" stroke="#333" stroke-width="2"/>
                    <line x1="80" y1="140" x2="140" y2="60" stroke="#333" stroke-width="2"/>
                    <path d="M 80 140 L 110 140 A 30 30 0 0 0 100 115" fill="#e3f2fd" stroke="#1565c0" stroke-width="2"/>
                    <text x="95" y="165" text-anchor="middle" font-size="12" fill="#333">Agudo (&lt; 90°)</text>
                    
                    <!-- Right angle -->
                    <line x1="220" y1="140" x2="300" y2="140" stroke="#333" stroke-width="2"/>
                    <line x1="220" y1="140" x2="220" y2="60" stroke="#333" stroke-width="2"/>
                    <rect x="220" y="120" width="20" height="20" fill="#e8f5e9" stroke="#2e7d32" stroke-width="2"/>
                    <text x="240" y="165" text-anchor="middle" font-size="12" fill="#333">Recto (90°)</text>
                    
                    <!-- Obtuse angle -->
                    <line x1="340" y1="140" x2="380" y2="140" stroke="#333" stroke-width="2"/>
                    <line x1="340" y1="140" x2="300" y2="50" stroke="#333" stroke-width="2"/>
                    <path d="M 340 140 L 370 140 A 30 30 0 0 1 335 120" fill="#fff8e1" stroke="#f57f17" stroke-width="2"/>
                    <text x="345" y="165" text-anchor="middle" font-size="12" fill="#333">Obtuso (&gt; 90°)</text>
                </svg>
            </div>

            <ul>
                <li><strong>Agudo:</strong> menor a 90°</li>
                <li><strong>Recto:</strong> exactamente 90°</li>
                <li><strong>Obtuso:</strong> mayor a 90° pero menor a 180°</li>
                <li><strong>Llano:</strong> exactamente 180°</li>
                <li><strong>Completo:</strong> exactamente 360°</li>
            </ul>

            <h4>Ángulos entre Paralelas y una Recta Transversal</h4>
            <div class="diagram-container">
                <svg viewBox="0 0 500 200" class="diagram-svg">
                    <!-- Parallel lines -->
                    <line x1="50" y1="60" x2="450" y2="60" stroke="#1565c0" stroke-width="2"/>
                    <text x="460" y="65" font-size="12" fill="#1565c0">r</text>
                    <line x1="50" y1="140" x2="450" y2="140" stroke="#1565c0" stroke-width="2"/>
                    <text x="460" y="145" font-size="12" fill="#1565c0">s</text>
                    
                    <!-- Transversal -->
                    <line x1="150" y1="20" x2="350" y2="180" stroke="#c62828" stroke-width="2"/>
                    <text x="355" y="185" font-size="12" fill="#c62828">t</text>
                    
                    <!-- Angle markers -->
                    <text x="200" y="55" text-anchor="middle" font-size="11" fill="#2e7d32" font-weight="bold">α</text>
                    <text x="240" y="155" text-anchor="middle" font-size="11" fill="#2e7d32" font-weight="bold">α</text>
                    <text x="180" y="85" text-anchor="middle" font-size="11" fill="#f57f17" font-weight="bold">β</text>
                    <text x="260" y="115" text-anchor="middle" font-size="11" fill="#f57f17" font-weight="bold">β</text>
                </svg>
            </div>
            <p>Si r || s:</p>
            <ul>
                <li><strong>Correspondientes:</strong> son iguales (α = α)</li>
                <li><strong>Alternos internos:</strong> son iguales (β = β)</li>
                <li><strong>Colaterales:</strong> suman 180°</li>
            </ul>

            <h4>Triángulos</h4>
            <p>Polígono de 3 lados. La suma de sus ángulos internos siempre es <strong>180°</strong>.</p>

            <div class="diagram-container">
                <svg viewBox="0 0 500 160" class="diagram-svg">
                    <!-- Equilateral -->
                    <polygon points="80,130 140,130 110,60" fill="#e3f2fd" stroke="#1565c0" stroke-width="2"/>
                    <text x="110" y="150" text-anchor="middle" font-size="11" fill="#333">Equilátero</text>
                    <text x="110" y="165" text-anchor="middle" font-size="10" fill="#666">3 lados iguales</text>
                    
                    <!-- Isosceles -->
                    <polygon points="220,130 300,130 260,50" fill="#e8f5e9" stroke="#2e7d32" stroke-width="2"/>
                    <text x="260" y="150" text-anchor="middle" font-size="11" fill="#333">Isósceles</text>
                    <text x="260" y="165" text-anchor="middle" font-size="10" fill="#666">2 lados iguales</text>
                    
                    <!-- Scalene -->
                    <polygon points="360,130 440,120 400,40" fill="#fff8e1" stroke="#f57f17" stroke-width="2"/>
                    <text x="400" y="150" text-anchor="middle" font-size="11" fill="#333">Escaleno</text>
                    <text x="400" y="165" text-anchor="middle" font-size="10" fill="#666">3 lados distintos</text>
                </svg>
            </div>

            <h4>Por sus ángulos:</h4>
            <ul>
                <li><strong>Acutángulo:</strong> los 3 ángulos son agudos</li>
                <li><strong>Rectángulo:</strong> tiene un ángulo recto (90°)</li>
                <li><strong>Obtusángulo:</strong> tiene un ángulo obtuso</li>
            </ul>

            <div class="example-box">
                <span class="example-title">📌 Propiedad Importante</span>
                <p>En un triángulo rectángulo, el lado opuesto al ángulo recto se llama <strong>hipotenusa</strong> y es el lado más largo.</p>
                <p><strong>Pitágoras:</strong> a² + b² = c²</p>
            </div>

            <h4>Cuadriláteros</h4>
            <p>Polígonos de 4 lados. La suma de sus ángulos internos es <strong>360°</strong>.</p>

            <div class="diagram-container">
                <svg viewBox="0 0 600 140" class="diagram-svg">
                    <!-- Square -->
                    <rect x="40" y="40" width="60" height="60" fill="#e3f2fd" stroke="#1565c0" stroke-width="2"/>
                    <text x="70" y="125" text-anchor="middle" font-size="11" fill="#333">Cuadrado</text>
                    
                    <!-- Rectangle -->
                    <rect x="150" y="45" width="80" height="50" fill="#e8f5e9" stroke="#2e7d32" stroke-width="2"/>
                    <text x="190" y="125" text-anchor="middle" font-size="11" fill="#333">Rectángulo</text>
                    
                    <!-- Rhombus -->
                    <polygon points="320,40 360,70 320,100 280,70" fill="#fff8e1" stroke="#f57f17" stroke-width="2"/>
                    <text x="320" y="125" text-anchor="middle" font-size="11" fill="#333">Rombo</text>
                    
                    <!-- Parallelogram -->
                    <polygon points="420,45 510,45 490,95 400,95" fill="#fce4ec" stroke="#c62828" stroke-width="2"/>
                    <text x="455" y="125" text-anchor="middle" font-size="11" fill="#333">Paralelogramo</text>
                    
                    <!-- Trapezoid -->
                    <polygon points="530,50 590,50 570,100 510,100" fill="#f3e5f5" stroke="#7b1fa2" stroke-width="2"/>
                    <text x="550" y="125" text-anchor="middle" font-size="11" fill="#333">Trapecio</text>
                </svg>
            </div>

            <h4>Áreas y Perímetros</h4>
            <table style="width:100%; border-collapse:collapse; margin:16px 0;">
                <tr style="background:#e3f2fd;">
                    <th style="padding:10px; border:1px solid #bbb;">Figura</th>
                    <th style="padding:10px; border:1px solid #bbb;">Perímetro</th>
                    <th style="padding:10px; border:1px solid #bbb;">Área</th>
                </tr>
                <tr>
                    <td style="padding:10px; border:1px solid #bbb;">Cuadrado (lado a)</td>
                    <td style="padding:10px; border:1px solid #bbb;">4a</td>
                    <td style="padding:10px; border:1px solid #bbb;">a²</td>
                </tr>
                <tr style="background:#f9f9f9;">
                    <td style="padding:10px; border:1px solid #bbb;">Rectángulo (b, h)</td>
                    <td style="padding:10px; border:1px solid #bbb;">2(b+h)</td>
                    <td style="padding:10px; border:1px solid #bbb;">b × h</td>
                </tr>
                <tr>
                    <td style="padding:10px; border:1px solid #bbb;">Triángulo (b, h)</td>
                    <td style="padding:10px; border:1px solid #bbb;">suma de lados</td>
                    <td style="padding:10px; border:1px solid #bbb;">(b × h) / 2</td>
                </tr>
                <tr style="background:#f9f9f9;">
                    <td style="padding:10px; border:1px solid #bbb;">Círculo (radio r)</td>
                    <td style="padding:10px; border:1px solid #bbb;">2πr</td>
                    <td style="padding:10px; border:1px solid #bbb;">πr²</td>
                </tr>
            </table>

            <div class="example-box">
                <span class="example-title">📌 Ejemplo</span>
                <p>¿Cuál es el área de una cancha de fútbol de 100m × 70m?</p>
                <p>Área = 100 × 70 = <strong>7.000 m²</strong></p>
            </div>

            <h4>Cuerpos Geométricos</h4>
            <p><strong>Prisma:</strong> tiene dos bases iguales y paralelas, y caras laterales rectangulares.</p>
            <p><strong>Pirámide:</strong> tiene una base poligonal y caras laterales triangulares que se juntan en un vértice.</p>

            <h4>Volumen</h4>
            <div class="example-box">
                <span class="example-title">📌 Fórmulas</span>
                <p><strong>Volumen de prisma:</strong> V = Área de la base × altura</p>
                <p><strong>Volumen de pirámide:</strong> V = (Área de la base × altura) / 3</p>
            </div>

            <div class="example-box">
                <span class="example-title">📌 Ejemplo</span>
                <p>Una caja de botines mide 30cm × 20cm × 15cm.</p>
                <p>Volumen = 30 × 20 × 15 = <strong>9.000 cm³</strong></p>
            </div>
        `
    },
    {
        id: 'estadistica',
        title: 'Estadística y Probabilidad',
        icon: '🎲',
        description: 'Tablas, gráficos, media y probabilidad',
        content: `
            <h3>Estadística</h3>
            <p>La <strong>estadística</strong> nos permite organizar, analizar e interpretar datos. Es como analizar las estadísticas de un equipo de fútbol.</p>

            <div class="football-context">
                <span class="context-title">⚽ Contexto Fútbol</span>
                <p>Estadísticas de goles por partido de un delantero en 10 partidos:<br>
                2, 1, 0, 3, 2, 1, 2, 0, 1, 2</p>
            </div>

            <h4>Tabla de Frecuencias</h4>
            <table style="width:100%; border-collapse:collapse; margin:16px 0; max-width:400px;">
                <tr style="background:#e3f2fd;">
                    <th style="padding:10px; border:1px solid #bbb;">Goles (x)</th>
                    <th style="padding:10px; border:1px solid #bbb;">Frecuencia (f)</th>
                </tr>
                <tr>
                    <td style="padding:10px; border:1px solid #bbb; text-align:center;">0</td>
                    <td style="padding:10px; border:1px solid #bbb; text-align:center;">2</td>
                </tr>
                <tr style="background:#f9f9f9;">
                    <td style="padding:10px; border:1px solid #bbb; text-align:center;">1</td>
                    <td style="padding:10px; border:1px solid #bbb; text-align:center;">3</td>
                </tr>
                <tr>
                    <td style="padding:10px; border:1px solid #bbb; text-align:center;">2</td>
                    <td style="padding:10px; border:1px solid #bbb; text-align:center;">4</td>
                </tr>
                <tr style="background:#f9f9f9;">
                    <td style="padding:10px; border:1px solid #bbb; text-align:center;">3</td>
                    <td style="padding:10px; border:1px solid #bbb; text-align:center;">1</td>
                </tr>
                <tr style="background:#e8f5e9; font-weight:bold;">
                    <td style="padding:10px; border:1px solid #bbb; text-align:center;">Total</td>
                    <td style="padding:10px; border:1px solid #bbb; text-align:center;">10</td>
                </tr>
            </table>

            <h4>Medidas de Tendencia Central</h4>

            <h4>Media (Promedio)</h4>
            <p>Suma de todos los valores dividido por la cantidad de valores.</p>
            <div class="example-box">
                <span class="example-title">📌 Ejemplo</span>
                <p>Media de goles = (2+1+0+3+2+1+2+0+1+2) / 10 = 14/10 = <strong>1.4 goles por partido</strong></p>
            </div>

            <h4>Mediana</h4>
            <p>El valor del medio cuando los datos están ordenados. Si hay cantidad par, promedio de los dos del medio.</p>
            <div class="example-box">
                <span class="example-title">📌 Ejemplo</span>
                <p>Datos ordenados: 0, 0, 1, 1, <strong>1, 2</strong>, 2, 2, 2, 3</p>
                <p>Mediana = (1 + 2) / 2 = <strong>1.5</strong></p>
            </div>

            <h4>Moda</h4>
            <p>El valor que más se repite.</p>
            <div class="example-box">
                <span class="example-title">📌 Ejemplo</span>
                <p>En los datos anteriores, el 2 aparece 4 veces (más que cualquier otro).</p>
                <p>Moda = <strong>2 goles</strong></p>
            </div>

            <h4>Gráficos</h4>

            <h4>Gráfico de Barras</h4>
            <div class="diagram-container">
                <svg viewBox="0 0 400 200" class="diagram-svg">
                    <!-- Axes -->
                    <line x1="50" y1="170" x2="350" y2="170" stroke="#333" stroke-width="2"/>
                    <line x1="50" y1="170" x2="50" y2="30" stroke="#333" stroke-width="2"/>
                    
                    <!-- Bars -->
                    <rect x="70" y="130" width="50" height="40" fill="#64b5f6" stroke="#1565c0" stroke-width="1"/>
                    <rect x="140" y="100" width="50" height="70" fill="#81c784" stroke="#2e7d32" stroke-width="1"/>
                    <rect x="210" y="70" width="50" height="100" fill="#ffb74d" stroke="#f57f17" stroke-width="1"/>
                    <rect x="280" y="140" width="50" height="30" fill="#e57373" stroke="#c62828" stroke-width="1"/>
                    
                    <!-- Labels -->
                    <text x="95" y="188" text-anchor="middle" font-size="12" fill="#333">0 goles</text>
                    <text x="165" y="188" text-anchor="middle" font-size="12" fill="#333">1 gol</text>
                    <text x="235" y="188" text-anchor="middle" font-size="12" fill="#333">2 goles</text>
                    <text x="305" y="188" text-anchor="middle" font-size="12" fill="#333">3 goles</text>
                    
                    <text x="35" y="135" text-anchor="end" font-size="11" fill="#666">2</text>
                    <text x="35" y="105" text-anchor="end" font-size="11" fill="#666">3</text>
                    <text x="35" y="75" text-anchor="end" font-size="11" fill="#666">4</text>
                    
                    <text x="200" y="20" text-anchor="middle" font-size="14" fill="#333" font-weight="bold">Goles por Partido</text>
                </svg>
            </div>

            <h4>Gráfico Circular (Torta)</h4>
            <p>Representa partes de un todo (porcentajes).</p>
            <div class="diagram-container">
                <svg viewBox="0 0 200 200" class="diagram-svg">
                    <circle cx="100" cy="100" r="80" fill="#e3f2fd" stroke="#1565c0" stroke-width="2"/>
                    <path d="M 100 100 L 100 20 A 80 80 0 0 1 180 100 Z" fill="#64b5f6"/>
                    <path d="M 100 100 L 180 100 A 80 80 0 0 1 100 180 Z" fill="#81c784"/>
                    <path d="M 100 100 L 100 180 A 80 80 0 0 1 20 100 Z" fill="#ffb74d"/>
                    <path d="M 100 100 L 20 100 A 80 80 0 0 1 100 20 Z" fill="#e57373"/>
                    
                    <text x="100" y="100" text-anchor="middle" font-size="10" fill="#333" font-weight="bold">Victorias</text>
                    <text x="100" y="115" text-anchor="middle" font-size="10" fill="#333">40%</text>
                </svg>
            </div>

            <h3>Probabilidad</h3>
            <p>La <strong>probabilidad</strong> mide la posibilidad de que ocurra un evento. Se calcula:</p>
            <p style="text-align:center; font-size:1.2rem; margin:16px 0; padding:16px; background:#e3f2fd; border-radius:8px;">
                P(evento) = <strong>casos favorables / casos posibles</strong>
            </p>

            <div class="example-box">
                <span class="example-title">📌 Ejemplo</span>
                <p>Si tiro un dado común (6 caras), ¿cuál es la probabilidad de sacar un 4?</p>
                <p>Casos favorables: 1 (el 4)<br>
                Casos posibles: 6 (1, 2, 3, 4, 5, 6)</p>
                <p>P(4) = 1/6 ≈ <strong>0.1667 = 16.67%</strong></p>
            </div>

            <div class="example-box">
                <span class="example-title">📌 Ejemplo Fútbol</span>
                <p>Un arquero atajó 15 de 20 penales. ¿Cuál es la probabilidad de que ataje el próximo?</p>
                <p>P(atajar) = 15/20 = 3/4 = <strong>0.75 = 75%</strong></p>
            </div>

            <h4>Eventos</h4>
            <ul>
                <li><strong>Seguro:</strong> probabilidad = 1 (100%). Ej: sacar un número menor que 7 al tirar un dado.</li>
                <li><strong>Imposible:</strong> probabilidad = 0 (0%). Ej: sacar un 8 al tirar un dado de 6 caras.</li>
                <li><strong>Posible:</strong> probabilidad entre 0 y 1.</li>
            </ul>

            <div class="tip-box">
                <span class="tip-title">💡 Consejo</span>
                <p>La suma de probabilidades de todos los resultados posibles siempre es <strong>1</strong> (o 100%).</p>
                <p>Ej: al tirar una moneda, P(cara) + P(ceca) = 0.5 + 0.5 = 1</p>
            </div>
        `
    }
];
