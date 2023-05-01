function verify_CPF_CNPJ(valor) {

  // Garante que o valor Ã© uma string
  valor = valor.toString();

  // Remove caracteres invÃ¡lidos do valor
  valor = valor.replace(/[^0-9]/g, '');

  // Verifica CPF
  if (valor.length === 11) {
    return 'CPF';
  }

  // Verifica CNPJ
  else if (valor.length === 14) {
    return 'CNPJ';
  }

  // NÃ£o retorna nada
  else {
    return false;
  }

} // verify_CPF_CNPJ 

/*
cal_digits_positions

Multiplica dÃ­gitos vezes posiÃ§Ãµes

@param string digitos Os digitos desejados
@param string posicoes A posiÃ§Ã£o que vai iniciar a regressÃ£o
@param string soma_digitos A soma das multiplicaÃ§Ãµes entre posiÃ§Ãµes e dÃ­gitos
@return string Os dÃ­gitos enviados concatenados com o Ãºltimo dÃ­gito
*/
function cal_digits_positions(digitos, posicoes = 10, soma_digitos = 0) {

  // Garante que o valor Ã© uma string
  digitos = digitos.toString();

  // Faz a soma dos dÃ­gitos com a posiÃ§Ã£o
  // Ex. para 10 posiÃ§Ãµes:
  //   0    2    5    4    6    2    8    8   4
  // x10   x9   x8   x7   x6   x5   x4   x3  x2
  //   0 + 18 + 40 + 28 + 36 + 10 + 32 + 24 + 8 = 196
  for (var i = 0; i < digitos.length; i++) {
    // Preenche a soma com o dÃ­gito vezes a posiÃ§Ã£o
    soma_digitos = soma_digitos + (digitos[i] * posicoes);

    // Subtrai 1 da posiÃ§Ã£o
    posicoes--;

    // Parte especÃ­fica para CNPJ
    // Ex.: 5-4-3-2-9-8-7-6-5-4-3-2
    if (posicoes < 2) {
      // Retorno a posiÃ§Ã£o para 9
      posicoes = 9;
    }
  }

  // Captura o resto da divisÃ£o entre soma_digitos dividido por 11
  // Ex.: 196 % 11 = 9
  soma_digitos = soma_digitos % 11;

  // Verifica se soma_digitos Ã© menor que 2
  if (soma_digitos < 2) {
    // soma_digitos agora serÃ¡ zero
    soma_digitos = 0;
  } else {
    // Se for maior que 2, o resultado Ã© 11 menos soma_digitos
    // Ex.: 11 - 9 = 2
    // Nosso dÃ­gito procurado Ã© 2
    soma_digitos = 11 - soma_digitos;
  }

  // Concatena mais um dÃ­gito aos primeiro nove dÃ­gitos
  // Ex.: 025462884 + 2 = 0254628842
  var cpf = digitos + soma_digitos;

  // Retorna
  return cpf;

} // cal_digits_positions

/*
Valida CPF

Valida se for CPF

@param  string cpf O CPF com ou sem pontos e traÃ§o
@return bool True para CPF correto - False para CPF incorreto
*/
function validCPF(valor) {

  // Garante que o valor Ã© uma string
  valor = valor.toString();

  // Remove caracteres invÃ¡lidos do valor
  valor = valor.replace(/[^0-9]/g, '');


  // Captura os 9 primeiros dÃ­gitos do CPF
  // Ex.: 02546288423 = 025462884
  var digitos = valor.substr(0, 9);

  // Faz o cÃ¡lculo dos 9 primeiros dÃ­gitos do CPF para obter o primeiro dÃ­gito
  var novo_cpf = cal_digits_positions(digitos);

  // Faz o cÃ¡lculo dos 10 dÃ­gitos do CPF para obter o Ãºltimo dÃ­gito
  var novo_cpf = cal_digits_positions(novo_cpf, 11);

  // Verifica se o novo CPF gerado Ã© idÃªntico ao CPF enviado
  if (novo_cpf === valor) {
    // CPF vÃ¡lido
    return true;
  } else {
    // CPF invÃ¡lido
    return false;
  }

} // validCPF

/*
validCNPJ

Valida se for um CNPJ

@param string cnpj
@return bool true para CNPJ correto
*/
function validCNPJ(valor) {

  // Garante que o valor Ã© uma string
  valor = valor.toString();

  // Remove caracteres invÃ¡lidos do valor
  valor = valor.replace(/[^0-9]/g, '');


  // O valor original
  var cnpj_original = valor;

  // Captura os primeiros 12 nÃºmeros do CNPJ
  var primeiros_numeros_cnpj = valor.substr(0, 12);

  // Faz o primeiro cÃ¡lculo
  var primeiro_calculo = cal_digits_positions(primeiros_numeros_cnpj, 5);

  // O segundo cÃ¡lculo Ã© a mesma coisa do primeiro, porÃ©m, comeÃ§a na posiÃ§Ã£o 6
  var segundo_calculo = cal_digits_positions(primeiro_calculo, 6);

  // Concatena o segundo dÃ­gito ao CNPJ
  var cnpj = segundo_calculo;

  // Verifica se o CNPJ gerado Ã© idÃªntico ao enviado
  if (cnpj === cnpj_original) {
    return true;
  }

  // Retorna falso por padrÃ£o
  return false;

} // validCNPJ

/*
valid_CPF_CNPJ

Valida o CPF ou CNPJ

@access public
@return bool true para vÃ¡lido, false para invÃ¡lido
*/
function valid_CPF_CNPJ(valor) {

  // Verifica se Ã© CPF ou CNPJ
  var valida = verify_CPF_CNPJ(valor);

  // Garante que o valor Ã© uma string
  valor = valor.toString();

  // Remove caracteres invÃ¡lidos do valor
  valor = valor.replace(/[^0-9]/g, '');


  // Valida CPF
  if (valida === 'CPF') {
    // Retorna true para cpf vÃ¡lido
    return validCPF(valor);
  }

  // Valida CNPJ
  else if (valida === 'CNPJ') {
    // Retorna true para CNPJ vÃ¡lido
    return validCNPJ(valor);
  }

  // NÃ£o retorna nada
  else {
    return false;
  }

} // valid_CPF_CNPJ

/*
fomart_CPF_CNPJ 

Formata um CPF ou CNPJ

@access public
@return string CPF ou CNPJ formatado
*/
function fomart_CPF_CNPJ(valor) {

  // O valor formatado
  var formatado = false;

  // Verifica se Ã© CPF ou CNPJ
  var valida = verify_CPF_CNPJ(valor);

  // Garante que o valor Ã© uma string
  valor = valor.toString();

  // Remove caracteres invÃ¡lidos do valor
  valor = valor.replace(/[^0-9]/g, '');


  // Valida CPF
  if (valida === 'CPF') {

    // Verifica se o CPF Ã© vÃ¡lido
    if (validCPF(valor)) {

      // Formata o CPF ###.###.###-##
      formatado = valor.substr(0, 3) + '.';
      formatado += valor.substr(3, 3) + '.';
      formatado += valor.substr(6, 3) + '-';
      formatado += valor.substr(9, 2) + '';

    }

  }

  // Valida CNPJ
  else if (valida === 'CNPJ') {

    // Verifica se o CNPJ Ã© vÃ¡lido
    if (validCNPJ(valor)) {

      // Formata o CNPJ ##.###.###/####-##
      formatado = valor.substr(0, 2) + '.';
      formatado += valor.substr(2, 3) + '.';
      formatado += valor.substr(5, 3) + '/';
      formatado += valor.substr(8, 4) + '-';
      formatado += valor.substr(12, 14) + '';

    }

  }

  // Retorna o valor 
  return formatado;

} // fomart_CPF_CNPJ 

const removeSymbols = (string) => string.replace(/\W/gi, '');

const validEmail = (email) => /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email)

export { removeSymbols, validCPF, validCNPJ, validEmail }