/** @jest-environment jsdom */

const { validarCPF } = require("./script")
test ('true', function () {
   var cpf = validarCPF("59150169017");
    expect(cpf).toBe(true);
} )
test('false', function () {
    var cpf = validarCPF('00000169017');
    expect(cpf).toBe(false);
})