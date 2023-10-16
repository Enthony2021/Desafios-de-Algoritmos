Algoritmo "Ordenação de inteiros"

Var
   numeros: vetor[1..4] de inteiro
   i, j, aux: inteiro


Inicio
   para i de 1 ate 4 faca
      Escreva("Digite o ", i, "º numero: ")
      leia(numeros[i])
   fimpara

   escreval(" ")
   escreva("Vetor Original: ")
   para i de 1 ate 4 faca
      Escreva(numeros[i])
   fimpara

   escreval(" ")

   para i de 1 ate 3 faca
      para j de 1 ate 3 faca
         se (j >= i) entao
            se numeros[i] > numeros[j+1] entao
               aux <- numeros[i]
               numeros[i] <- numeros[j+1]
               numeros[j+1] <- aux
            fimse
         fimse
      fimpara
   fimpara

   Escreva("Numeros Ordenados: ")
   para i de 1 ate 4 faca
      Escreva(numeros[i])
   fimpara

   escreval(" ")
Fimalgoritmo