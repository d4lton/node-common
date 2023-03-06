[@d4lton/node-common](../README.md) / [Exports](../modules.md) / English

# Class: English

Copyright ©2022 Dana Basken

## Table of contents

### Constructors

- [constructor](English.md#constructor)

### Properties

- [DIVISIONS](English.md#divisions)

### Methods

- [bytes](English.md#bytes)
- [bytesToNumber](English.md#bytestonumber)
- [bytesToString](English.md#bytestostring)
- [formatTimeAgo](English.md#formattimeago)
- [getMagnitudeBytes](English.md#getmagnitudebytes)
- [getTimeframeMs](English.md#gettimeframems)
- [ms](English.md#ms)

## Constructors

### constructor

• **new English**()

## Properties

### DIVISIONS

▪ `Static` **DIVISIONS**: `any`[]

#### Defined in

[src/English.ts:7](https://github.com/d4lton/node-common/blob/5a7ce4e/src/English.ts#L7)

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

[src/English.ts:63](https://github.com/d4lton/node-common/blob/5a7ce4e/src/English.ts#L63)

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

[src/English.ts:46](https://github.com/d4lton/node-common/blob/5a7ce4e/src/English.ts#L46)

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

[src/English.ts:55](https://github.com/d4lton/node-common/blob/5a7ce4e/src/English.ts#L55)

___

### formatTimeAgo

▸ `Static` **formatTimeAgo**(`date`, `locale?`): `any`

Format a date as an English relative time in the past. eg. "3 days ago"

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `date` | `Date` | `undefined` |
| `locale` | `string` | `"en-US"` |

#### Returns

`any`

#### Defined in

[src/English.ts:90](https://github.com/d4lton/node-common/blob/5a7ce4e/src/English.ts#L90)

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

[src/English.ts:76](https://github.com/d4lton/node-common/blob/5a7ce4e/src/English.ts#L76)

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

[src/English.ts:35](https://github.com/d4lton/node-common/blob/5a7ce4e/src/English.ts#L35)

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

[src/English.ts:21](https://github.com/d4lton/node-common/blob/5a7ce4e/src/English.ts#L21)
