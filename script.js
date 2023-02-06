/*
Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, 
deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve 
       sucesso ou não em entrar no concurso e mostre uma mensagem na tela.
*/

const students = [
  {
    nome: "Marcelo",
    n1: 7.0,
    n2: 8.1,
  },
  {
    nome: "Eduarda",
    n1: 9.0,
    n2: 8.8,
  },
  {
    nome: "Fernanda",
    n1: 5.9,
    n2: 4.3,
  },
  {
    nome: "Reginaldo",
    n1: 2.0,
    n2: 5.4,
  }
]

function studentAverage(n1, n2) {
  return (n1 + n2) / 2
}

function printStudentAverage(student) {
  if(studentAverage(student.n1, student.n2) >= 7) {
    return `A média do(a) aluno(a) ${student.nome} é: ${studentAverage(student.n1, student.n2)}\n
    Parabéns, ${student.nome}! Você foi aprovado(a) no concurso!`
  } 
  else {
    return`A média do(a) aluno(a) ${student.nome} é: ${studentAverage(student.n1, student.n2)}\n
    Não foi dessa vez, ${student.nome}! Tente novamente!`
  } 
} 

for(let student of students) {
  let studentMessage = printStudentAverage(student)
  alert(studentMessage)
}