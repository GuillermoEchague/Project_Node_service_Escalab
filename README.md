# Desarrollo Rest Server Proyecto curso Node ESCALAB


## Instalar Dependencias
### Dependencias
```bash
yarn add bcrypt-nodejs
yarn add body-parser
yarn add connect-multiparty
yarn add express
yarn add jwt-simple
yarn add moment
yarn add mongoose
yarn add nodemon
```

## Clonar Repositorio

```bash
git clone https://github.com/GuillermoEchague/Project_Node_service_Escalab.git
```

## Recontruir modulos de Node

```bash
yarn install
```

## Generar Tags del proyecto

```bash
git tag -a v1.0.0 -m "Inicio WebServer"
git push --tags

# delete local tag 'v1.0.0'
git tag -d v1.0.0
# delete remote tag 'v1.0.0' (eg, GitHub version too)
git push origin :refs/tags/v1.0.0

# alternative approach
git push --delete origin tagName
git tag -d tagName

git rm .env --cached (Borrar seguimiento)
```

## Subir a Heroku

```bash
heroku git:clone -a imageniacellphone

# Repetir proceso luego de cambio en el proyecto

git branch
git push heroku main
```

## Crear - borrar variables de entorno Heroku

```bash
heroku --version
heroku config
heroku config:set nombre="Guillermo"
heroku config:unset nombre
```

## Logs en heroku

```bash
heroku logs -n 100 -a
heroku logs -n 100 --tail
```

## Producción 

```bash
https://imageniacellphone.herokuapp.com/....
```

## Documentación Postman

```bash
https://documenter.getpostman.com/view/7460598/UV5ZAvwU
```