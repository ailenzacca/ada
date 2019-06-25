# preguntADAs

## Consigna

Debemos desarrollar para un estudio de videojuegos una web app interactiva que funcione como un juego social de Trivia, similar al Preguntados.

La página debe permitir:

   * Registrar y loguear usuarixs (username y password)
   * Crear preguntas y respuestas y subirlas para que otrxs puedan responderlas
   * Crear desafíos de preguntas y respuestas, que otrxs usuarixs van a poder realizar cuando quieran y puedan calificar si les gustó o no, a partir de preguntas ya subidas
   * Jugar a responder una cantidad de preguntas de preguntas (10) definidas
   * Que lxs usuarixs suban de nivel cuando respondan X preguntas
   * Calificar preguntas y desafios (me gusta, no me gusta)
   * Desafiar a alguien a una competencia, donde cada unx debe jugar a responder las preguntas, y mostrar el resultado y quién ganó al final. Los desafíos se juegan de forma asíncrona (no en vivo)
   * Elegir preguntas al azar o por categoría(s), y entre mejores preguntas o preguntas nuevas, para tanto el juego normal como la competencia
   * Ver distintos tipos de rankings
      - Usuarixs (puntajes generales)
      - Usuarixs (puntajes por categoría)
      - Usuarixs (competencias ganadas)
      - Desafíos (mejor puntuados)
      - Desafíos (más jugados)
      - Desafíos (más nuevos)
      - Categorías (cantidad de preguntas)
      - Categorías (con mejor puntaje)
   * Ver las páginas de perfil de lxs usuarixs, y que muestre
      - Nickname
      - Puntaje/Nivel
      - Estadísticas
         * Preguntas respondidas
         * Preguntas creadas
         * Preguntas respondidas x categoría
         * Competencias ganadas        
      - Desafíos
      - Siguiendo / Le siguen       
      - Acciones
        * Perfil propio:
            - Subir pregunta
            - Crear desafío
            - Jugar competencia
            - Desloguearse
            - Ver preguntas subidas
        * Otro perfil
            - Seguir / Dejar de seguir
            - Jugar desafío
            - Desafiar a competencia
* Crear pregunta
   * Sistema de notificaciones que te avise:
      - Cuando subís de nivel
      - Cuando alguien te desafió a una competencia
      - Cuando una competencia se termina y quién ganó
      - Cuando alguien a quien seguimos agrega un desafío
      - Cuando alguien te comienza a seguir


En cuanto a consideraciones estéticas, la página debe:

   * Ser responsive y verse bien en distintos dispositivos
   * Contar con una estética definida: elegante, moderna,
   cartoon, etc.
   * Contar con una buena UI, lo que significa
     - Diseño consistente: mismas tipografías, colores, formas y tamaños en todas las páginas
     - Elementos distinguibles. Algo clickable debe demostrar de forma clara que lo es.
     - Diseño minimalista. Se debe mostrar sólo la cantidad de información necesaria. Evitar la sobrecarga de información.
     Hacer uso de espacios vacíos
   * Contar con buena UX, lo que significa
     - Información fácil de encontrar
     - Cada elemento interactuable debe hacer lo que sugiere,
     y debe ser inmediatamente evidente lo que debemos esperar cuando interactuamos con él (no que haya que hacerlo para ver qué pasa)
     - Secciones y páginas fáciles de acceder
     - Menor cantidad de clicks posibles
     - Feedback constante en todas las acciones que se realicen (animaciones, transiciones, hovers, mostrar mensajes, errores, elementos interactuables, etc)                  


## Roles

   - *Team Leader (TL):* Su responsabilidad es hacer los merges entre branchs y resolver los conflictos
   - *Project manager:* Encargada de crear, organizar, estimar tareas y llevar control del estado del proyecto (como vienen los tiempos, ver si alguien se atrasa, etc). Utiliza Trello.
   - *Investigadora*: Es la que investiga cómo resolver/solucionar los problemas/desafíos con los que el equipo se vaya encontrando, probar las posibles soluciones y explicárselas a las demás.
   - *Tester*: Encargada de probar el proyecto en sus distintas etapas, ir encontrando errores, fallas, o cosas a mejorar, y subir el ticket a Trello. Debe tener una mirada integral, no solo a nivel de desarrollo, sino de diseño y UI/UX.


## Flujo de trabajo con GIT

Lineamientos generales:

   * master va a ser la branch con la última versión estable (sin errores) del proyecto,a donde vamos a integrar todas las branch
   * dev va a ser la branch donde vamos a ir mergeando las branchs antes de pasarlas a master, para poder probarlas de antemano
   * Una branch por tarea. Por cada tarea nueva que encaramos, nos paramos en master,nos traemos lo último, creamos una branch, y empezamos a trabajar ahí. Una vez que terminamos la tarea y subimos la branch, y fue mergeada a master,la borramos y creamos una nueva para la siguiente tarea. 
   * Los nombres de las branchs deben referir a la feature que estamos agregando o tarea con la que estamos trabajando, p.ej: fixBugLogin, rankingUsers, htmlNotificaciones, etc.
   * Commits con mensajes breves y descriptivos (no "subo cambios", "subo archivos", "hago modificaciones", etc)

Pasos a seguir cuando iniciamos una nueva tarea:

   1. Si no estamos en master, nos paramos con

   ```shell
   git checkout master
   ```

   2. Hacemos un pull de master

   ```powershell
   git pull origin master
   ```

   3. Creamos la branch de la feature con la que vamos a trabajar

   ```shell
   git checkout -b miBranch
   ```

   4. Subimos la branch al repositorio

   ```bash
   git push -u origin miBranch
   ```

   5. Cuando terminamos de trabajar en nuestra branch, nos aseguramos primero que no hay conflictos con lo actual en master 

   ```sh
   git checkout master
   git pull origin master
   git checkout miBranch
   git rebase master
   ```

   6. Luego pusheamos los cambios finales de nuestra branch y avisamos a TL

   ```git
   git push origin miBranch
   ```

   7. TL la mergea a dev y avisa a tester

   ```git 
   git checkout dev
   git pull origin miBranch
   git push origin dev
   ```

   8. Tester la prueba en dev

   ```git
   git checkout dev
   git pull origin dev
   ```

   9. Si da el ok, TL la mergea a master

   ```git 
   git checkout master
   git pull origin miBranch
   git push origin master
   ```

   10. Una vez que fue integrada, borramos la branch de nuestra PC y del repositorio

   ```git
   git checkout master
   git branch -D miBranch
   git push --delete miBranch
   ```
 
