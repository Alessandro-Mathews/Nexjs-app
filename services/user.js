import jwt from 'jsonwebtoken'

let users = []

const SECRET = process.env.JWT_SECRET

function createToken(user){
    return jwt.sign({ email: user.email, name:user.name }, SECRET)
}

function readToken(token){
    try{
    return jwt.verify(token, SECRET)
    }catch(err) {
        throw new Error('Token inválido')
    }
}

export function verifica(token){
    return readToken(token)
}

export function cadastro(body) {
    const user = users.find(({ email }) => email === body.email)
    if (user) throw new Error('Usuário já cadastrado')

        users.push(body)
        
const token = createToken(body)
return token

}

export function login(body) {
    const user = users.find(({ email }) => email === body.email) 
    if (!user) throw new Error('usuario_nao_encontrado')
    if (user.password !== body.password) throw new Error('senha_incorreta')

const token = createToken(user)
return token

}