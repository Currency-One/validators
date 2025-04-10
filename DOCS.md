## Modules

<dl>
<dt><a href="#module_Date Validators">Date Validators</a></dt>
<dd></dd>
<dt><a href="#module_General Validators">General Validators</a></dt>
<dd></dd>
<dt><a href="#module_Patterns">Patterns</a></dt>
<dd></dd>
<dt><a href="#module_Pesel Validators">Pesel Validators</a></dt>
<dd></dd>
<dt><a href="#module_Phone Number Validators">Phone Number Validators</a></dt>
<dd></dd>
</dl>

<a name="module_Date Validators"></a>

## Date Validators

* [Date Validators](#module_Date Validators)
    * [.isDateValidator](#module_Date Validators.isDateValidator) ⇒ <code>boolean</code>
    * [.isDateNotUnder18Validator](#module_Date Validators.isDateNotUnder18Validator) ⇒ <code>boolean</code>
    * [.isBirthDateValidator](#module_Date Validators.isBirthDateValidator) ⇒ <code>boolean</code>
    * [.isAfterTodayValidator](#module_Date Validators.isAfterTodayValidator) ⇒ <code>boolean</code>
    * [.isBeforeTodayValidator](#module_Date Validators.isBeforeTodayValidator) ⇒ <code>boolean</code>
    * [.isExpiryDateValidator](#module_Date Validators.isExpiryDateValidator) ⇒ <code>boolean</code>
    * [.isReleaseDateValidator](#module_Date Validators.isReleaseDateValidator) ⇒ <code>boolean</code>

<a name="module_Date Validators.isDateValidator"></a>

### Date Validators.isDateValidator ⇒ <code>boolean</code>
<p>Checks if value is valid date in format YYYY-MM-DD. Validates also number of days per month</p>

**Kind**: static property of [<code>Date Validators</code>](#module_Date Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |

<a name="module_Date Validators.isDateNotUnder18Validator"></a>

### Date Validators.isDateNotUnder18Validator ⇒ <code>boolean</code>
<p>Checks if person with given birthday is above 18 years. Date in format YYYY-MM-DD</p>

**Kind**: static property of [<code>Date Validators</code>](#module_Date Validators)  

| Param | Type | Description |
| --- | --- | --- |
| date | <code>string</code> | <p>value to check.</p> |

<a name="module_Date Validators.isBirthDateValidator"></a>

### Date Validators.isBirthDateValidator ⇒ <code>boolean</code>
<p>Checks if value is valid birth date. Assumes that human cannot be older than 150 years. Date in format YYYY-MM-DD</p>

**Kind**: static property of [<code>Date Validators</code>](#module_Date Validators)  

| Param | Type | Description |
| --- | --- | --- |
| date | <code>string</code> | <p>value to check.</p> |

<a name="module_Date Validators.isAfterTodayValidator"></a>

### Date Validators.isAfterTodayValidator ⇒ <code>boolean</code>
<p>Checks if given date is after today. Date in format YYYY-MM-DD</p>

**Kind**: static property of [<code>Date Validators</code>](#module_Date Validators)  

| Param | Type | Description |
| --- | --- | --- |
| date | <code>string</code> | <p>value to check.</p> |

<a name="module_Date Validators.isBeforeTodayValidator"></a>

### Date Validators.isBeforeTodayValidator ⇒ <code>boolean</code>
<p>Checks if given date is before today. Date in format YYYY-MM-DD</p>

**Kind**: static property of [<code>Date Validators</code>](#module_Date Validators)  

| Param | Type | Description |
| --- | --- | --- |
| date | <code>string</code> | <p>value to check.</p> |

<a name="module_Date Validators.isExpiryDateValidator"></a>

### Date Validators.isExpiryDateValidator ⇒ <code>boolean</code>
<p>Checks if given expiration date of id card is valid. Checks if given date is later or equal to today and
if given date is smaller than current date plus 100 years. Date in format YYYY-MM-DD</p>

**Kind**: static property of [<code>Date Validators</code>](#module_Date Validators)  

| Param | Type | Description |
| --- | --- | --- |
| date | <code>string</code> | <p>value to check.</p> |

<a name="module_Date Validators.isReleaseDateValidator"></a>

### Date Validators.isReleaseDateValidator ⇒ <code>boolean</code>
<p>Checks if given release date of id card is valid. Checks if given date is earlier or equal to today and
if given date is bigger than current date minus 100 years. You can also pass expiration date and if it's given
then it is checked if expiration date is later than release date. Date in format YYYY-MM-DD</p>

**Kind**: static property of [<code>Date Validators</code>](#module_Date Validators)  

| Param | Type | Description |
| --- | --- | --- |
| date | <code>string</code> | <p>value to check.</p> |
| expiryDate | <code>string</code> | <p>acc.</p> |

<a name="module_General Validators"></a>

## General Validators

* [General Validators](#module_General Validators)
    * [.isValueValidator](#module_General Validators.isValueValidator) ⇒ <code>boolean</code>
    * [.isNotNullValidator](#module_General Validators.isNotNullValidator) ⇒ <code>boolean</code>
    * [.isNotUndefinedValidator](#module_General Validators.isNotUndefinedValidator) ⇒ <code>boolean</code>
    * [.isNotEmptyUnlessValidator](#module_General Validators.isNotEmptyUnlessValidator) ⇒ <code>boolean</code>
    * [.isNotEmptyStringValidator](#module_General Validators.isNotEmptyStringValidator) ⇒ <code>boolean</code>
    * [.isNotEmptyTrimmedStringValidator](#module_General Validators.isNotEmptyTrimmedStringValidator) ⇒ <code>boolean</code>
    * [.isSelectedValidator](#module_General Validators.isSelectedValidator) ⇒ <code>boolean</code>
    * [.isNipValidator](#module_General Validators.isNipValidator) ⇒ <code>boolean</code>
    * [.isPostalCodeValidator](#module_General Validators.isPostalCodeValidator) ⇒ <code>boolean</code>
    * [.isPasswordValidator](#module_General Validators.isPasswordValidator) ⇒ <code>boolean</code>
    * [.isNotSmallerValidator](#module_General Validators.isNotSmallerValidator) ⇒ <code>boolean</code>
    * [.isNotSmallerOrEqualValidator](#module_General Validators.isNotSmallerOrEqualValidator) ⇒ <code>boolean</code>
    * [.isNotHigherValidator](#module_General Validators.isNotHigherValidator) ⇒ <code>boolean</code>
    * [.isNotHigherOrEqualValidator](#module_General Validators.isNotHigherOrEqualValidator) ⇒ <code>boolean</code>
    * [.isEmailValidator](#module_General Validators.isEmailValidator) ⇒ <code>boolean</code>
    * [.isMinLengthValidator](#module_General Validators.isMinLengthValidator) ⇒ <code>boolean</code>
    * [.isMaxLengthValidator](#module_General Validators.isMaxLengthValidator) ⇒ <code>boolean</code>
    * [.isSameAsValidator](#module_General Validators.isSameAsValidator) ⇒ <code>boolean</code>
    * [.isOtherThanValidator](#module_General Validators.isOtherThanValidator) ⇒ <code>boolean</code>
    * [.isIbanValidator](#module_General Validators.isIbanValidator) ⇒ <code>boolean</code>
    * [.isIbanLengthValidator](#module_General Validators.isIbanLengthValidator) ⇒ <code>boolean</code>
    * [.isLanNumberValidator](#module_General Validators.isLanNumberValidator) ⇒ <code>boolean</code>
    * [.isRoutingCodeValidator](#module_General Validators.isRoutingCodeValidator) ⇒ <code>boolean</code>
    * [.isTaxNumberValidator](#module_General Validators.isTaxNumberValidator) ⇒ <code>boolean</code>
    * [.isCnapsCodeValidator](#module_General Validators.isCnapsCodeValidator) ⇒ <code>boolean</code>
    * [.isSwiftValidator](#module_General Validators.isSwiftValidator) ⇒ <code>boolean</code>
    * [.isSwiftCountryValidator](#module_General Validators.isSwiftCountryValidator) ⇒ <code>boolean</code>
    * [.isIdNumberValidator](#module_General Validators.isIdNumberValidator) ⇒ <code>boolean</code>
    * [.isPassportValidator](#module_General Validators.isPassportValidator) ⇒ <code>boolean</code>
    * [.isPropValidator](#module_General Validators.isPropValidator) ⇒ <code>boolean</code>
    * [.isAllKeysValidator](#module_General Validators.isAllKeysValidator) ⇒ <code>boolean</code>
    * [.isLatinValidator](#module_General Validators.isLatinValidator) ⇒ <code>boolean</code>

<a name="module_General Validators.isValueValidator"></a>

### General Validators.isValueValidator ⇒ <code>boolean</code>
<p>Checks if any proper value was given</p>

**Kind**: static property of [<code>General Validators</code>](#module_General Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>any</code> | <p>value to check.</p> |

<a name="module_General Validators.isNotNullValidator"></a>

### General Validators.isNotNullValidator ⇒ <code>boolean</code>
<p>Checks if value is not null</p>

**Kind**: static property of [<code>General Validators</code>](#module_General Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>any</code> | <p>value to check.</p> |

<a name="module_General Validators.isNotUndefinedValidator"></a>

### General Validators.isNotUndefinedValidator ⇒ <code>boolean</code>
<p>Checks if value is not undefined</p>

**Kind**: static property of [<code>General Validators</code>](#module_General Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>any</code> | <p>value to check.</p> |

<a name="module_General Validators.isNotEmptyUnlessValidator"></a>

### General Validators.isNotEmptyUnlessValidator ⇒ <code>boolean</code>
<p>Checks if value was given unless can be empty.</p>

**Kind**: static property of [<code>General Validators</code>](#module_General Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |
| canBeEmpty | <code>boolean</code> | <p>if true validation is ignored</p> |

<a name="module_General Validators.isNotEmptyStringValidator"></a>

### General Validators.isNotEmptyStringValidator ⇒ <code>boolean</code>
<p>Checks if value is not empty string</p>

**Kind**: static property of [<code>General Validators</code>](#module_General Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>any</code> | <p>value to check.</p> |

<a name="module_General Validators.isNotEmptyTrimmedStringValidator"></a>

### General Validators.isNotEmptyTrimmedStringValidator ⇒ <code>boolean</code>
<p>Checks if value is not empty string after trim</p>

**Kind**: static property of [<code>General Validators</code>](#module_General Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |

<a name="module_General Validators.isSelectedValidator"></a>

### General Validators.isSelectedValidator ⇒ <code>boolean</code>
<p>Checks if any option was chosen. Created for select2 library</p>

**Kind**: static property of [<code>General Validators</code>](#module_General Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> \| <code>boolean</code> | <p>value to check.</p> |

<a name="module_General Validators.isNipValidator"></a>

### General Validators.isNipValidator ⇒ <code>boolean</code>
<p>Checks if value is valid nip number</p>

**Kind**: static property of [<code>General Validators</code>](#module_General Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |

<a name="module_General Validators.isPostalCodeValidator"></a>

### General Validators.isPostalCodeValidator ⇒ <code>boolean</code>
<p>Checks if value is valid polish or chinese postal code</p>

**Kind**: static property of [<code>General Validators</code>](#module_General Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |
| country | <code>string</code> | <p>country of postal code.</p> |

<a name="module_General Validators.isPasswordValidator"></a>

### General Validators.isPasswordValidator ⇒ <code>boolean</code>
<p>Checks if value is valid password with 8 signs</p>

**Kind**: static property of [<code>General Validators</code>](#module_General Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |

<a name="module_General Validators.isNotSmallerValidator"></a>

### General Validators.isNotSmallerValidator ⇒ <code>boolean</code>
<p>Checks if value is smaller than given minimal value</p>

**Kind**: static property of [<code>General Validators</code>](#module_General Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |
| minValue | <code>string</code> | <p>minimal value.</p> |

<a name="module_General Validators.isNotSmallerOrEqualValidator"></a>

### General Validators.isNotSmallerOrEqualValidator ⇒ <code>boolean</code>
<p>Checks if value is smaller or equal than given minimal value</p>

**Kind**: static property of [<code>General Validators</code>](#module_General Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |
| minValue | <code>string</code> | <p>minimal value.</p> |

<a name="module_General Validators.isNotHigherValidator"></a>

### General Validators.isNotHigherValidator ⇒ <code>boolean</code>
<p>Checks if value is higher than given maximal value</p>

**Kind**: static property of [<code>General Validators</code>](#module_General Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |
| maxValue | <code>string</code> | <p>maximal value.</p> |

<a name="module_General Validators.isNotHigherOrEqualValidator"></a>

### General Validators.isNotHigherOrEqualValidator ⇒ <code>boolean</code>
<p>Checks if value is higher or equal than given maximal value</p>

**Kind**: static property of [<code>General Validators</code>](#module_General Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |
| maxValue | <code>string</code> | <p>maximal value.</p> |

<a name="module_General Validators.isEmailValidator"></a>

### General Validators.isEmailValidator ⇒ <code>boolean</code>
<p>Checks if value is valid email. Based on w3.org</p>

**Kind**: static property of [<code>General Validators</code>](#module_General Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |

<a name="module_General Validators.isMinLengthValidator"></a>

### General Validators.isMinLengthValidator ⇒ <code>boolean</code>
<p>Checks if value has smaller or equal length than given minimal length</p>

**Kind**: static property of [<code>General Validators</code>](#module_General Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |
| minLength | <code>string</code> | <p>minimal length.</p> |

<a name="module_General Validators.isMaxLengthValidator"></a>

### General Validators.isMaxLengthValidator ⇒ <code>boolean</code>
<p>Checks if value has bigger or equal length than given maximal length</p>

**Kind**: static property of [<code>General Validators</code>](#module_General Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |
| maxLength | <code>string</code> | <p>maximal length.</p> |

<a name="module_General Validators.isSameAsValidator"></a>

### General Validators.isSameAsValidator ⇒ <code>boolean</code>
<p>Checks if value is equal to other value</p>

**Kind**: static property of [<code>General Validators</code>](#module_General Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |
| otherValue | <code>string</code> | <p>other value to check.</p> |

<a name="module_General Validators.isOtherThanValidator"></a>

### General Validators.isOtherThanValidator ⇒ <code>boolean</code>
<p>Checks if value is not equal to other value</p>

**Kind**: static property of [<code>General Validators</code>](#module_General Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |
| otherValue | <code>string</code> | <p>other value to check.</p> |

<a name="module_General Validators.isIbanValidator"></a>

### General Validators.isIbanValidator ⇒ <code>boolean</code>
<p>Checks if value is valid iban number</p>

**Kind**: static property of [<code>General Validators</code>](#module_General Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |
| countryCode | <code>CountryCode</code> | <p>country code.</p> |

<a name="module_General Validators.isIbanLengthValidator"></a>

### General Validators.isIbanLengthValidator ⇒ <code>boolean</code>
<p>Checks if value is valid iban number</p>

**Kind**: static property of [<code>General Validators</code>](#module_General Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |
| countryCode | <code>CountryCode</code> | <p>country code.</p> |

<a name="module_General Validators.isLanNumberValidator"></a>

### General Validators.isLanNumberValidator ⇒ <code>boolean</code>
<p>Checks if value is valid non-iban account number</p>

**Kind**: static property of [<code>General Validators</code>](#module_General Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |
| [country] | <code>string</code> | <p>optional country to check.</p> |

<a name="module_General Validators.isRoutingCodeValidator"></a>

### General Validators.isRoutingCodeValidator ⇒ <code>boolean</code>
<p>Checks if value is valid routing code</p>

**Kind**: static property of [<code>General Validators</code>](#module_General Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |
| [country] | <code>string</code> | <p>optional country to check.</p> |

<a name="module_General Validators.isTaxNumberValidator"></a>

### General Validators.isTaxNumberValidator ⇒ <code>boolean</code>
<p>Checks if value is valid tax number</p>

**Kind**: static property of [<code>General Validators</code>](#module_General Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |
| [country] | <code>string</code> | <p>optional country to check.</p> |
| [isCompany] | <code>boolean</code> | <p>optional isCompany to check.</p> |

<a name="module_General Validators.isCnapsCodeValidator"></a>

### General Validators.isCnapsCodeValidator ⇒ <code>boolean</code>
<p>Checks if value is valid cnaps code</p>

**Kind**: static property of [<code>General Validators</code>](#module_General Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |

<a name="module_General Validators.isSwiftValidator"></a>

### General Validators.isSwiftValidator ⇒ <code>boolean</code>
<p>Checks if value is valid swift number</p>

**Kind**: static property of [<code>General Validators</code>](#module_General Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |

<a name="module_General Validators.isSwiftCountryValidator"></a>

### General Validators.isSwiftCountryValidator ⇒ <code>boolean</code>
<p>Checks if given country is equal to country taken from swift</p>

**Kind**: static property of [<code>General Validators</code>](#module_General Validators)  

| Param | Type | Description |
| --- | --- | --- |
| swift | <code>string</code> | <p>swift to check.</p> |
| country | <code>string</code> | <p>country to compare.</p> |

<a name="module_General Validators.isIdNumberValidator"></a>

### General Validators.isIdNumberValidator ⇒ <code>boolean</code>
<p>Checks if value is valid polish id number</p>

**Kind**: static property of [<code>General Validators</code>](#module_General Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |

<a name="module_General Validators.isPassportValidator"></a>

### General Validators.isPassportValidator ⇒ <code>boolean</code>
<p>Checks if value is valid polish passport number</p>

**Kind**: static property of [<code>General Validators</code>](#module_General Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |

<a name="module_General Validators.isPropValidator"></a>

### General Validators.isPropValidator ⇒ <code>boolean</code>
<p>Checks if given object has property valid and if it is equal to true</p>

**Kind**: static property of [<code>General Validators</code>](#module_General Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Object</code> | <p>value to check.</p> |

<a name="module_General Validators.isAllKeysValidator"></a>

### General Validators.isAllKeysValidator ⇒ <code>boolean</code>
<p>Checks if given object has all keys</p>

**Kind**: static property of [<code>General Validators</code>](#module_General Validators)  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>object</code> | <p>value to check.</p> |
| expectedKeys | <code>Array.&lt;string&gt;</code> | <p>array of expected keys.</p> |

<a name="module_General Validators.isLatinValidator"></a>

### General Validators.isLatinValidator ⇒ <code>boolean</code>
<p>Checks if value is in Latin alphabet
or matches any kind of punctuation character
or matches any math symbols, currency signs, dingbats, box-drawing characters, etc</p>

**Kind**: static property of [<code>General Validators</code>](#module_General Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |

<a name="module_Patterns"></a>

## Patterns

* [Patterns](#module_Patterns)
    * [.isAccountNumberPattern](#module_Patterns.isAccountNumberPattern) ⇒ <code>boolean</code>
    * [.isAccountTypeOtherPattern](#module_Patterns.isAccountTypeOtherPattern) ⇒ <code>boolean</code>
    * [.isAlphaNumericPattern](#module_Patterns.isAlphaNumericPattern) ⇒ <code>boolean</code>
    * [.isCityPattern](#module_Patterns.isCityPattern) ⇒ <code>boolean</code>
    * [.isGenericTextPattern](#module_Patterns.isGenericTextPattern) ⇒ <code>boolean</code>
    * [.isLastNamePattern](#module_Patterns.isLastNamePattern) ⇒ <code>boolean</code>
    * [.isNamePattern](#module_Patterns.isNamePattern) ⇒ <code>boolean</code>
    * [.isNipPattern](#module_Patterns.isNipPattern) ⇒ <code>boolean</code>
    * [.isNumericPattern](#module_Patterns.isNumericPattern) ⇒ <code>boolean</code>
    * [.isPasswordPattern](#module_Patterns.isPasswordPattern) ⇒ <code>boolean</code>
    * [.isBankAccountNamePattern](#module_Patterns.isBankAccountNamePattern) ⇒ <code>boolean</code>
    * [.isCharsCompanyPattern](#module_Patterns.isCharsCompanyPattern) ⇒ <code>boolean</code>
    * [.isPostalCodePattern](#module_Patterns.isPostalCodePattern) ⇒ <code>boolean</code>
    * [.isStreetPattern](#module_Patterns.isStreetPattern) ⇒ <code>boolean</code>
    * [.isPolishStreetPattern](#module_Patterns.isPolishStreetPattern) ⇒ <code>boolean</code>

<a name="module_Patterns.isAccountNumberPattern"></a>

### Patterns.isAccountNumberPattern ⇒ <code>boolean</code>
<p>Checks if value matches account number pattern</p>
<pre> /^[a-zA-Z0-9\\s]*$/ </pre>

**Kind**: static property of [<code>Patterns</code>](#module_Patterns)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |

<a name="module_Patterns.isAccountTypeOtherPattern"></a>

### Patterns.isAccountTypeOtherPattern ⇒ <code>boolean</code>
<p>Checks if value matches account type pattern</p>
<pre> /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ. ]*$/ </pre>

**Kind**: static property of [<code>Patterns</code>](#module_Patterns)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |

<a name="module_Patterns.isAlphaNumericPattern"></a>

### Patterns.isAlphaNumericPattern ⇒ <code>boolean</code>
<p>Checks if value matches alpha numeric pattern</p>
<pre> /^[a-zA-Z0-9]*$/ </pre>

**Kind**: static property of [<code>Patterns</code>](#module_Patterns)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |

<a name="module_Patterns.isCityPattern"></a>

### Patterns.isCityPattern ⇒ <code>boolean</code>
<p>Checks if value matches city pattern</p>
<pre> /^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/ </pre>

**Kind**: static property of [<code>Patterns</code>](#module_Patterns)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |

<a name="module_Patterns.isGenericTextPattern"></a>

### Patterns.isGenericTextPattern ⇒ <code>boolean</code>
<p>Checks if value matches generic text pattern</p>
<pre> /^[0-9a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ\s\,\.\-\+\(\)\!\?\:

**Kind**: static property of [<code>Patterns</code>](#module_Patterns)  
**\n]*$/**: </pre>  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |

<a name="module_Patterns.isLastNamePattern"></a>

### Patterns.isLastNamePattern ⇒ <code>boolean</code>
<p>Checks if value matches last name pattern</p>
<pre> /^[a-zA-Z\u00C0-\u017F\-\s\']*$/ </pre>

**Kind**: static property of [<code>Patterns</code>](#module_Patterns)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |

<a name="module_Patterns.isNamePattern"></a>

### Patterns.isNamePattern ⇒ <code>boolean</code>
<p>Checks if value matches name pattern</p>
<pre> /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ ]*$/ </pre>

**Kind**: static property of [<code>Patterns</code>](#module_Patterns)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |

<a name="module_Patterns.isNipPattern"></a>

### Patterns.isNipPattern ⇒ <code>boolean</code>
<p>Checks if value matches nip pattern</p>
<pre> /^[a-zA-Z0-9\s\-]*$/ </pre>

**Kind**: static property of [<code>Patterns</code>](#module_Patterns)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |

<a name="module_Patterns.isNumericPattern"></a>

### Patterns.isNumericPattern ⇒ <code>boolean</code>
<p>Checks if value matches numeric pattern</p>
<pre> /^[0-9]*$/ </pre>

**Kind**: static property of [<code>Patterns</code>](#module_Patterns)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |

<a name="module_Patterns.isPasswordPattern"></a>

### Patterns.isPasswordPattern ⇒ <code>boolean</code>
<p>Checks if value matches password pattern</p>
<pre> /^[0-9a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ\s\-\+\_\\!

**Kind**: static property of [<code>Patterns</code>](#module_Patterns)  
**\#\$\%\^&amp;\*\|\&quot;\&#x27;\;\:\,\.\?\(\)\[\]\{\}]*$/**: </pre>  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |

<a name="module_Patterns.isBankAccountNamePattern"></a>

### Patterns.isBankAccountNamePattern ⇒ <code>boolean</code>
<p>Checks if value matches bank account name pattern</p>
<pre>
  /^[0-9a-zA-Z\u00C0-\u017F\xad\xa0\u201c\u201d\u201e\u201f\u2013\_\;\'

**Kind**: static property of [<code>Patterns</code>](#module_Patterns)  
**\-\s\&quot;,.\/\-\+\&amp;\(\)]*$/**: </pre>  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |

<a name="module_Patterns.isCharsCompanyPattern"></a>

### Patterns.isCharsCompanyPattern ⇒ <code>boolean</code>
<p>Checks if value matches company name pattern</p>
<pre>
  /^[a-zA-Z0-9\u00C0-\u017F\xad\xa0\u201c\u201d\u201e\u201f\u2013\_\;

**Kind**: static property of [<code>Patterns</code>](#module_Patterns)  
**\-\s\.\,\&amp;\&#x60;\&#x27;\:\(\)\!\*\&quot;\/\\\+]*$/**: </pre>  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |

<a name="module_Patterns.isPostalCodePattern"></a>

### Patterns.isPostalCodePattern ⇒ <code>boolean</code>
<p>Checks if value matches postal code pattern</p>
<pre> /^[a-zA-Z0-9 \-]*$/ </pre>

**Kind**: static property of [<code>Patterns</code>](#module_Patterns)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |

<a name="module_Patterns.isStreetPattern"></a>

### Patterns.isStreetPattern ⇒ <code>boolean</code>
<p>Checks if value matches street name pattern</p>
<pre> /^[0-9a-zA-Z\u00C0-\u017F\-\s\.,\/]*$/ </pre>

**Kind**: static property of [<code>Patterns</code>](#module_Patterns)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |

<a name="module_Patterns.isPolishStreetPattern"></a>

### Patterns.isPolishStreetPattern ⇒ <code>boolean</code>
<p>Checks if value matches <street><number> pattern</p>
<pre> /[a-zA-Z\\u00C0-\\u017F]+\\s\\d.*$/ </pre>

**Kind**: static property of [<code>Patterns</code>](#module_Patterns)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |

<a name="module_Pesel Validators"></a>

## Pesel Validators

* [Pesel Validators](#module_Pesel Validators)
    * [.isPeselNotUnder18Validator](#module_Pesel Validators.isPeselNotUnder18Validator) ⇒ <code>boolean</code>
    * [.isPeselValidator](#module_Pesel Validators.isPeselValidator) ⇒ <code>boolean</code>

<a name="module_Pesel Validators.isPeselNotUnder18Validator"></a>

### Pesel Validators.isPeselNotUnder18Validator ⇒ <code>boolean</code>
<p>Checks if person with given pesel is above 18 years</p>

**Kind**: static property of [<code>Pesel Validators</code>](#module_Pesel Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |

<a name="module_Pesel Validators.isPeselValidator"></a>

### Pesel Validators.isPeselValidator ⇒ <code>boolean</code>
<p>Checks if value is valid pesel number. Also accepts *********** as anonymized pesel</p>

**Kind**: static property of [<code>Pesel Validators</code>](#module_Pesel Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |

<a name="module_Phone Number Validators"></a>

## Phone Number Validators

* [Phone Number Validators](#module_Phone Number Validators)
    * [.isPhoneValidator](#module_Phone Number Validators.isPhoneValidator) ⇒ <code>boolean</code>
    * [.isMobilePhoneValidator](#module_Phone Number Validators.isMobilePhoneValidator) ⇒ <code>boolean</code>

<a name="module_Phone Number Validators.isPhoneValidator"></a>

### Phone Number Validators.isPhoneValidator ⇒ <code>boolean</code>
<p>Checks if value is valid phone number. Based on google libphonenumber</p>

**Kind**: static property of [<code>Phone Number Validators</code>](#module_Phone Number Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |
| countryCode | <code>CountryCode</code> | <p>country code.</p> |

<a name="module_Phone Number Validators.isMobilePhoneValidator"></a>

### Phone Number Validators.isMobilePhoneValidator ⇒ <code>boolean</code>
<p>Checks if value is valid mobile phone number. Based on google libphonenumber</p>

**Kind**: static property of [<code>Phone Number Validators</code>](#module_Phone Number Validators)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>value to check.</p> |
| countryCode | <code>CountryCode</code> | <p>country code.</p> |

