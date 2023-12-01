const pizzaria = require('./tonyPizzaria.js')

const verPizzaria = function(){

    let array = []
    let json = {}
    let cont = 0;

    while(cont < 4 ) {
        array.push (pizzaria.Categorias.Categorias[cont])
        cont++
    }
     json.Categorias = array.length
     json.nome = array
     return json 
}
 // console.log(verPizzaria())

 const verUsuarios = function(){

    let array = []
    let filtrarUsuario = 'Vitória Cardoso'
    let cont = 0 
    
    while(cont < 3 ) {
        if (filtrarUsuario.toUpperCase()==pizzaria.Usuarios.Usuarios[cont].nome.toUpperCase()){
          json = {}
        json.id = pizzaria.Usuarios.Usuarios[cont].id
        json.nome=pizzaria.Usuarios.Usuarios[cont].nome
        json.email=pizzaria.Usuarios.Usuarios[cont].email
        json.senha=pizzaria.Usuarios.Usuarios[cont].senha
        json.telefone=pizzaria.Usuarios.Usuarios[cont].telefone
        json.endereço=pizzaria.Usuarios.Usuarios[cont].endereço
        array.push(json)
        }
       cont++
        }
        return array 
    }


    console.log (verUsuarios())