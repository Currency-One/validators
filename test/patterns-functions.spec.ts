import {
  isAccountNumberPattern,
  isAccountTypeOtherPattern,
  isAlphaNumericPattern,
  isBankAccountNamePattern,
  isCharsCompanyPattern,
  isCityPattern,
  isGenericTextPattern,
  isLastNamePattern,
  isNamePattern,
  isNipPattern,
  isNumericPattern,
  isPasswordPattern,
  isPostalCodePattern,
  isStreetPattern,
} from '../lib'

describe('pattern functions', () => {
  it('isAccountNumberPattern should validate correctly', () => {
    expect(isAccountNumberPattern('')).toBeTruthy()
    expect(isAccountNumberPattern('PL 02 0023')).toBeTruthy()
    expect(isAccountNumberPattern('PL 02 0023 /]')).toBeFalsy()
    expect(isAccountNumberPattern('PL 02 0023 <script')).toBeFalsy()
  })

  it('isAccountTypeOtherPattern should validate correctly', () => {
    expect(isAccountTypeOtherPattern('account')).toBeTruthy()
    expect(isAccountTypeOtherPattern('account <script>')).toBeFalsy()
  })

  it('isAlphaNumericPattern should validate correctly', () => {
    expect(isAlphaNumericPattern('32849')).toBeTruthy()
    expect(isAlphaNumericPattern('abc')).toBeTruthy()
    expect(isAlphaNumericPattern('12 33')).toBeFalsy()
    expect(isAlphaNumericPattern('1aaa33')).toBeTruthy()
  })

  it('isCityPattern should validate correctly', () => {
    expect(isCityPattern('Poznań')).toBeTruthy()
    expect(isCityPattern('Poznań ø ö ř ě ')).toBeTruthy()
    expect(isCityPattern('Biskupice')).toBeTruthy()
    expect(isCityPattern('Val-d\'Or')).toBeTruthy()
    expect(isCityPattern('Provence-Alpes-Côte d\'Azur')).toBeTruthy()

    expect(isCityPattern('Poznań <script>')).toBeFalsy()
    expect(isCityPattern('$$$London$$$')).toBeFalsy()
    expect(isCityPattern('W4rs4w')).toBeFalsy()
    expect(isCityPattern('White.shark')).toBeFalsy()
  })

  it('isGenericTextPattern should validate correctly', () => {
    expect(isGenericTextPattern('Dzień dobry, Gdzie moje hajsy!?!? Pozdrawiam Romero.')).toBeTruthy()
    expect(isGenericTextPattern('Ala ma <script>alert("kota");</script>')).toBeFalsy()
  })

  it('isLastNamePattern should validate correctly', () => {
    expect(isLastNamePattern('Jan Kowalski')).toBeTruthy()
    expect(isLastNamePattern('Joanna Kowalska-Nowak')).toBeTruthy()
    expect(isLastNamePattern('Jan 3 Sobieski')).toBeFalsy()
    expect(isLastNamePattern('Jan 3 Sobieski #')).toBeFalsy()
    expect(isLastNamePattern('asdsżźńć ø ö ř ě')).toBeTruthy()
    expect(isLastNamePattern('Gerry O\'Malley')).toBeTruthy()
    expect(isLastNamePattern('John Murphy')).toBeTruthy()
    expect(isLastNamePattern('Bellamy Blake')).toBeTruthy()
    expect(isLastNamePattern('Gracie-Mae Moody')).toBeTruthy()
    expect(isLastNamePattern('Indie O\'Neill')).toBeTruthy()
    expect(isLastNamePattern('Bert<>Berg')).toBeFalsy()
    expect(isLastNamePattern('!RayCano!')).toBeFalsy()
    expect(isLastNamePattern('Amir#$%Plant')).toBeFalsy()
  })

  it('isNamePattern should validate correctly', () => {
    expect(isNamePattern('Jan Kowalski')).toBeTruthy()
    expect(isNamePattern('Jan Kowalski <#')).toBeFalsy()
    expect(isNamePattern('Jan Kowalski 32')).toBeFalsy()
    expect(isNamePattern('JanKowalski')).toBeTruthy()
  })

  it('isNipPattern should validate correctly', () => {
    expect(isNipPattern('12 33')).toBeTruthy()
    expect(isNipPattern('13-233')).toBeTruthy()
    expect(isNipPattern('13-AAAA')).toBeTruthy()
    expect(isNipPattern('13 AAAA')).toBeTruthy()
    expect(isNipPattern('13 AAAA <script')).toBeFalsy()
  })

  it('isNumericPattern should validate correctly', () => {
    expect(isNumericPattern('32849')).toBeTruthy()
    expect(isNumericPattern('abc')).toBeFalsy()
    expect(isNumericPattern('32849<script')).toBeFalsy()
  })

  it('isPasswordPattern should validate correctly', () => {
    expect(isPasswordPattern('dupamariana123')).toBeTruthy()
    expect(isPasswordPattern('(dupa)[ąśłóżźńć] {!}.')).toBeTruthy()
    expect(isPasswordPattern('3.14159=π=~5 # þß©')).toBeFalsy()
  })

  it('isBankAccountNamePattern should validate correctly', () => {
    expect(isBankAccountNamePattern('32849<script')).toBeFalsy()
    expect(isBankAccountNamePattern('AAA 32849 () @ ; _  \xa0 \xad \u201d')).toBeTruthy()
    expect(isBankAccountNamePattern('AAA 32849  ø ö ř ě ')).toBeTruthy()
  })

  it('isCharsCompanyPattern should validate correctly', () => {
    expect(isCharsCompanyPattern('A&B 4 , . - & @ ; _ \xa0 \xad \u201d')).toBeTruthy()
    expect(isCharsCompanyPattern('A&B 4 , . - & <scipt')).toBeFalsy()
    expect(isCharsCompanyPattern('asdsżźńć ø ö ř ě : ( ) ! * " / +')).toBeTruthy()
    expect(isCharsCompanyPattern('tronomy.')).toBeTruthy()
    expect(isCharsCompanyPattern('ViaHire/')).toBeTruthy()
    expect(isCharsCompanyPattern('Aug metic6.com')).toBeTruthy()
    expect(isCharsCompanyPattern('$Lech$')).toBeFalsy()
    expect(isCharsCompanyPattern('#Software#')).toBeFalsy()
  })

  it('isPostalCodePattern should validate correctly', () => {
    expect(isPostalCodePattern('')).toBeTruthy()
    expect(isPostalCodePattern('00-000')).toBeTruthy()
    expect(isPostalCodePattern('AAA00000')).toBeTruthy()
    expect(isPostalCodePattern('32849<script')).toBeFalsy()
  })

  it('isStreetPattern should validate correctly', () => {
    expect(isStreetPattern('Klonowa 32')).toBeTruthy()
    expect(isStreetPattern('Klonowa')).toBeTruthy()
    expect(isStreetPattern('Klonowa 32 #')).toBeFalsy()
    expect(isStreetPattern('Klonowa 32 <script>')).toBeFalsy()
    expect(isStreetPattern('Klonowa 32 ø ö ř ě , . /')).toBeTruthy()
    expect(isStreetPattern('Krzekowska 17')).toBeTruthy()
    expect(isStreetPattern('Lecha, itów 14')).toBeTruthy()
    expect(isStreetPattern('ul. Nowaka-Alojzego 7')).toBeTruthy()
    expect(isStreetPattern('ul Małachowskiego Stanisława 56/20')).toBeTruthy()
    expect(isStreetPattern('ul#$Lecha')).toBeFalsy()
    expect(isStreetPattern('Pyk?')).toBeFalsy()
    expect(isStreetPattern('*Cyk*Cyk*Cyk*')).toBeFalsy()
  })
})
