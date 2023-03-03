[@d4lton/node-common](../README.md) / [Exports](../modules.md) / English

# Class: English

Copyright ©2022 Dana Basken

## Table of contents

### Constructors

- [constructor](English.md#constructor)

### Methods

- [bytes](English.md#bytes)
- [bytesToNumber](English.md#bytestonumber)
- [bytesToString](English.md#bytestostring)
- [getMagnitudeBytes](English.md#getmagnitudebytes)
- [getTimeframeMs](English.md#gettimeframems)
- [ms](English.md#ms)

## Constructors

### constructor

• **new English**()

## Methods

### bytes

▸ `Static` **bytes**(`bytes`, `binary?`): `string` \| `number`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `bytes` | `any` | `undefined` |
| `binary` | `boolean` | `true` |

#### Returns

`string` \| `number`

#### Defined in

[src/English.ts:53](https://github.com/d4lton/node-common/blob/60b873c/src/English.ts#L53)

___

### bytesToNumber

▸ `Static` **bytesToNumber**(`bytes`, `binary?`): `number`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `bytes` | `string` | `undefined` |
| `binary` | `boolean` | `true` |

#### Returns

`number`

#### Defined in

[src/English.ts:36](https://github.com/d4lton/node-common/blob/60b873c/src/English.ts#L36)

___

### bytesToString

▸ `Static` **bytesToString**(`value`, `binary?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | `number` | `undefined` |
| `binary` | `boolean` | `true` |

#### Returns

`string`

#### Defined in

[src/English.ts:45](https://github.com/d4lton/node-common/blob/60b873c/src/English.ts#L45)

___

### getMagnitudeBytes

▸ `Static` **getMagnitudeBytes**(`magnitude`, `binary?`): `number`

Get the number of bytes for a simple english string's magnitude. See English.bytes().

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `magnitude` | `string` | `undefined` |
| `binary` | `boolean` | `true` |

#### Returns

`number`

#### Defined in

[src/English.ts:66](https://github.com/d4lton/node-common/blob/60b873c/src/English.ts#L66)

___

### getTimeframeMs

▸ `Static` **getTimeframeMs**(`timeframe`): `number`

Get the number of milliseconds for a simple english string's timeframe. See English.ms().

#### Parameters

| Name | Type |
| :------ | :------ |
| `timeframe` | `string` |

#### Returns

`number`

#### Defined in

[src/English.ts:25](https://github.com/d4lton/node-common/blob/60b873c/src/English.ts#L25)

___

### ms

▸ `Static` **ms**(`time`): `number`

Get milliseconds from a simple english string that consists of an optional sign (+/-), a decimal value, and a
timeframe indicator of s, m, h, d, w for seconds, minutes, hours, days, week. Example: "2w" for 2 weeks.

#### Parameters

| Name | Type |
| :------ | :------ |
| `time` | `string` |

#### Returns

`number`

#### Defined in

[src/English.ts:11](https://github.com/d4lton/node-common/blob/60b873c/src/English.ts#L11)
