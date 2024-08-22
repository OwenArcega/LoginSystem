-- ¿En qué consiste el proyecto? --
Es un sistema de inicio de sesión utilizando NodeJs, Express, DotEnv, JSONWebToken, UUID, bcryptJS y Cors. Esta RestApi se conecta a una base de datos local por medio de variables de entorno, a partir de ahí, podemos crear distintos usuarios para utilizar los servicios de la API. Cuando se ingresa a la aplicación por usuario, se genera un token que se utiliza para proteger los datos y servicios.

-- ¿Qué es la librería UUID? --
Es una librería que provee distintas formas de crear y manipular identificadores únicos universales (Universal Unique Identifiers - UUID). Esta librería es recomendable utilizarla en vez de un campo autonumerico en una base de datos en las siguientes circunstancias:
  1.- Portabilidad. UUID es posible utilizarlo en diferentes plataformas, debido a que es un formato estándar.
  2.- Escalabilidad. Debido a su tamaño de 128 bytes, es posible almacenar muchos más valores que en un campo autonumérico que es de 32 bytes.
  3.- Único. Se garantiza que cada UUID sea único, mientras que esto no sucede con los campos autonuméricos.
  
  -- ¿Qué es el parámetro Salt Rounds en la librería bcryptjs?
Este parámetro hace referencia a la cantidad de veces que se hasheara una contraseña. Mientras más alto sea este parámetro, más difícil será de atacar por una fuente externa. Hashear se refiere a una función que toma un parámetro de cualquier tamaño y calculo un resultado de un tamaño específico.  
