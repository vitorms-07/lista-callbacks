function Nota(nota) {
    if (nota >= 7) {
        return "Aluno aprovado";
    } else if (nota >= 5 && nota < 7) {
        return "Aluno em recuperação";
    } else {
        return "Aluno reprovado";
    }
}
console.log(Nota(8));
console.log(Nota(6));
console.log(Nota(4));
