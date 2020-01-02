import {
  accountNumberPattern,
  accountTypeOtherPattern,
  alphaNumericPattern,
  bankAccountNamePattern,
  charsCompanyPattern,
  cityPattern,
  genericTextPattern,
  lastNamePattern,
  namePattern,
  nipPattern,
  numericPattern,
  passwordPattern,
  postalCodePattern,
  streetPattern
} from '../lib'

describe('pattern functions', () => {
  it('accountNumberPattern should validate correctly', () => {
    expect(accountNumberPattern('')).toBeTruthy()
    expect(accountNumberPattern('PL 02 0023')).toBeTruthy()
    expect(accountNumberPattern('PL 02 0023 /]')).toBeFalsy()
    expect(accountNumberPattern('PL 02 0023 <script')).toBeFalsy()
  })

  it('accountTypeOtherPattern should validate correctly', () => {
    expect(accountTypeOtherPattern('account')).toBeTruthy()
    expect(accountTypeOtherPattern('account <script>')).toBeFalsy()
  })

  it('alphaNumericPattern should validate correctly', () => {
    expect(alphaNumericPattern('32849')).toBeTruthy()
    expect(alphaNumericPattern('abc')).toBeTruthy()
    expect(alphaNumericPattern('12 33')).toBeFalsy()
    expect(alphaNumericPattern('1aaa33')).toBeTruthy()
  })

  it('cityPattern should validate correctly', () => {
    expect(cityPattern('Poznań')).toBeTruthy()
    expect(cityPattern('Poznań ø ö ř ě ')).toBeTruthy()
    expect(cityPattern('Biskupice')).toBeTruthy()
    expect(cityPattern('Val-d\'Or')).toBeTruthy()
    expect(cityPattern('Provence-Alpes-Côte d\'Azur')).toBeTruthy()

    expect(cityPattern('Poznań <script>')).toBeFalsy()
    expect(cityPattern('$$$London$$$')).toBeFalsy()
    expect(cityPattern('W4rs4w')).toBeFalsy()
    expect(cityPattern('White.shark')).toBeFalsy()
  })

  it('genericTextPattern should validate correctly', () => {
    expect(genericTextPattern('Dzień dobry, Gdzie moje hajsy!?!? Pozdrawiam Romero.')).toBeTruthy()
    expect(genericTextPattern('Ala ma <script>alert("kota");</script>')).toBeFalsy()
  })

  it('lastNamePattern should validate correctly', () => {
    expect(lastNamePattern('Jan Kowalski')).toBeTruthy()
    expect(lastNamePattern('Joanna Kowalska-Nowak')).toBeTruthy()
    expect(lastNamePattern('Jan 3 Sobieski')).toBeFalsy()
    expect(lastNamePattern('Jan 3 Sobieski #')).toBeFalsy()
    expect(lastNamePattern('asdsżźńć ø ö ř ě')).toBeTruthy()
    expect(lastNamePattern('Gerry O\'Malley')).toBeTruthy()
    expect(lastNamePattern('John Murphy')).toBeTruthy()
    expect(lastNamePattern('Bellamy Blake')).toBeTruthy()
    expect(lastNamePattern('Gracie-Mae Moody')).toBeTruthy()
    expect(lastNamePattern('Indie O\'Neill')).toBeTruthy()
    expect(lastNamePattern('Bert<>Berg')).toBeFalsy()
    expect(lastNamePattern('!RayCano!')).toBeFalsy()
    expect(lastNamePattern('Amir#$%Plant')).toBeFalsy()
  })

  it('namePattern should validate correctly', () => {
    expect(namePattern('Jan Kowalski')).toBeTruthy()
    expect(namePattern('Jan Kowalski <#')).toBeFalsy()
    expect(namePattern('Jan Kowalski 32')).toBeFalsy()
    expect(namePattern('JanKowalski')).toBeTruthy()
  })

  it('nipPattern should validate correctly', () => {
    expect(nipPattern('12 33')).toBeTruthy()
    expect(nipPattern('13-233')).toBeTruthy()
    expect(nipPattern('13-AAAA')).toBeTruthy()
    expect(nipPattern('13 AAAA')).toBeTruthy()
    expect(nipPattern('13 AAAA <script')).toBeFalsy()
  })

  it('numericPattern should validate correctly', () => {
    expect(numericPattern('32849')).toBeTruthy()
    expect(numericPattern('abc')).toBeFalsy()
    expect(numericPattern('32849<script')).toBeFalsy()
  })

  it('passwordPattern should validate correctly', () => {
    expect(passwordPattern('dupamariana123')).toBeTruthy()
    expect(passwordPattern('(dupa)[ąśłóżźńć] {!}.')).toBeTruthy()
    expect(passwordPattern('3.14159=π=~5 # þß©')).toBeFalsy()
  })

  it('bankAccountNamePattern should validate correctly', () => {
    expect(bankAccountNamePattern('32849<script')).toBeFalsy()
    expect(bankAccountNamePattern('AAA 32849 () @ ; _  \xa0 \xad \u201d')).toBeTruthy()
    expect(bankAccountNamePattern('AAA 32849  ø ö ř ě ')).toBeTruthy()
  })

  it('charsCompanyPattern should validate correctly', () => {
    expect(charsCompanyPattern('A&B 4 , . - & @ ; _ \xa0 \xad \u201d')).toBeTruthy()
    expect(charsCompanyPattern('A&B 4 , . - & <scipt')).toBeFalsy()
    expect(charsCompanyPattern('asdsżźńć ø ö ř ě : ( ) ! * " / +')).toBeTruthy()
    expect(charsCompanyPattern('tronomy.')).toBeTruthy()
    expect(charsCompanyPattern('ViaHire/')).toBeTruthy()
    expect(charsCompanyPattern('Aug metic6.com')).toBeTruthy()
    expect(charsCompanyPattern('$Lech$')).toBeFalsy()
    expect(charsCompanyPattern('#Software#')).toBeFalsy()
  })

  it('postalCodePattern should validate correctly', () => {
    expect(postalCodePattern('')).toBeTruthy()
    expect(postalCodePattern('00-000')).toBeTruthy()
    expect(postalCodePattern('AAA00000')).toBeTruthy()
    expect(postalCodePattern('32849<script')).toBeFalsy()
  })

  it('streetPattern should validate correctly', () => {
    expect(streetPattern('Klonowa 32')).toBeTruthy()
    expect(streetPattern('Klonowa')).toBeTruthy()
    expect(streetPattern('Klonowa 32 #')).toBeFalsy()
    expect(streetPattern('Klonowa 32 <script>')).toBeFalsy()
    expect(streetPattern('Klonowa 32 ø ö ř ě , . /')).toBeTruthy()
    expect(streetPattern('Krzekowska 17')).toBeTruthy()
    expect(streetPattern('Lecha, itów 14')).toBeTruthy()
    expect(streetPattern('ul. Nowaka-Alojzego 7')).toBeTruthy()
    expect(streetPattern('ul Małachowskiego Stanisława 56/20')).toBeTruthy()
    expect(streetPattern('ul#$Lecha')).toBeFalsy()
    expect(streetPattern('Pyk?')).toBeFalsy()
    expect(streetPattern('*Cyk*Cyk*Cyk*')).toBeFalsy()
  })
})
