# Opt-out como consentimiento por omisión

La lógica del **opt-out** funciona de manera parecida a las cookies: el uso de datos aparece como una condición ya integrada en la infraestructura, y la persona o institución debe intervenir activamente para rechazarlo.

En el contexto de la salud, esta lógica se vuelve más problemática porque no se trata de preferencias de navegación, sino de imágenes internas del cuerpo, diagnósticos, historiales clínicos y posibles riesgos biológicos.

Una resonancia, por ejemplo, puede almacenarse en [[AWS HealthImaging]], cruzarse con expedientes estructurados en [[AWS HealthLake]], asociarse con datos genómicos mediante [[AWS HealthOmics]] y luego procesarse en [[Amazon SageMaker]] para entrenar o ejecutar modelos de inteligencia artificial.

Aunque AWS no sea necesariamente quien usa esos datos directamente, sí ofrece el entorno donde esos cuerpos escaneados se vuelven almacenables, comparables, consultables y entrenables.

La pregunta crítica no es solo quién posee los datos, sino quién diseña las condiciones para que puedan circular.

## Servicios relacionados

- [[AWS HealthImaging]]: almacena, organiza y permite consultar imágenes médicas.
- [[AWS HealthLake]]: estructura datos clínicos bajo estándares como FHIR.
- [[AWS HealthOmics]]: procesa y almacena datos genómicos y ómicos.
- [[Amazon SageMaker]]: permite entrenar, desplegar y gobernar modelos de machine learning.

## Ideas relacionadas

- [[Cuerpo como dataset]]
- [[Consentimiento por omisión]]
- [[Infraestructura cloud]]
- [[Imagen médica]]
- [[Gobernanza de datos]]
- [[IA médica]]