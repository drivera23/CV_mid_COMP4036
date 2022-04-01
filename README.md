# CV_mid_COMP4036

Este proyecto es parte de la clase de COMP4036, y se enfoca en desarrollar
programas en JS y PHP. Expliquemos cada archivo que constituye el proyecto.
Primero tenemos index.html (en el servidor es .php), y este contiene el mensaje
de bienvenida junto a los 2 botones que enlazan a las otras dos paginas .html
(.php en el servidor). El archivo side.html(.php) contiene todos los programas
escritos en PHP (y su codigo) y JS (definidos en otro archivo), con una serie
de botones que ayudan interactuar con dichos programas. El archivo de llamado
trivial_functions.js se encarga de proveer los codigos de JS para la pagina anterior.
Luego está el archivo function.js, esta se encarga de hacer el codigo de JS para
las clases que constituyen el CV. Los mismos son presentados en el documento
cvres.html, cuyo proposito es recibir la información de function.js y demostrar al
usuario el CV.


Lo siguiente es el dato de entradas al CV llamado cv.csv: Cada clase del CV tiene su
formato de input. Pero cada fila tiene algo en comun. El primer valor es la categoria,
asi el CV sabe como limpiar cada dato. Ahora ilustrare el formato para todos.

- Title = [Name, name]
- Contact = [Contact, Email, Phone #]
- Summary = [Summary, title (i.e. Student, Dev, etc.), Quick intro about yourself]
- Education = [Education, CollegeName, GradYear, City, State/Country, DegreeType, Concentration, GPA]
- Professional Experiences = [Professional Experiences, Company, Year, Title, tasks] (it can be multiple tasks)
- Projects = [Projects, Year, Title, Tasks] (it can be multiple tasks)
- Skills = [Skills, SkillType (ie Programming, Laguage, etc), SkillName] (it can be multiple SkillNames)
- Recognitions = [Recognitions, YearGiven, RecognitionName]
- Courses = [Courses, CourseCode, CourseName]
