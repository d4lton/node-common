[@d4lton/node-common](../README.md) / [Exports](../modules.md) / Utilities

# Class: Utilities

Copyright ©2021 Dana Basken

## Table of contents

### Constructors

- [constructor](Utilities.md#constructor)

### Methods

- [isEmpty](Utilities.md#isempty)
- [isObject](Utilities.md#isobject)
- [isSet](Utilities.md#isset)
- [isType](Utilities.md#istype)
- [sleep](Utilities.md#sleep)
- [truncateMiddle](Utilities.md#truncatemiddle)

## Constructors

### constructor

• **new Utilities**()

## Methods

### isEmpty

▸ `Static` **isEmpty**(`value`): `boolean`

Is a given value empty, meaning, does it have a value? For a string, this means it contains characters. For an
Array, this means it has at least one element. For an object, does it contain any keys? For all, it means it's
not null or undefined.
Note: For objects, only a simple object works. Object instances will need their own check for "empty"

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`boolean`

#### Defined in

[src/Utilities.ts:35](https://github.com/d4lton/node-common/blob/60b873c/src/Utilities.ts#L35)

___

### isObject

▸ `Static` **isObject**(`value`): `boolean`

Is the given value an object?

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`boolean`

#### Defined in

[src/Utilities.ts:46](https://github.com/d4lton/node-common/blob/60b873c/src/Utilities.ts#L46)

___

### isSet

▸ `Static` **isSet**(`value`): `boolean`

Is a given value set (not null or undefined)?

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`boolean`

#### Defined in

[src/Utilities.ts:25](https://github.com/d4lton/node-common/blob/60b873c/src/Utilities.ts#L25)

___

### isType

▸ `Static` **isType**(`value`, `type`): `boolean`

Check a value to see if it is a given type.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `type` | `string` |

#### Returns

`boolean`

#### Defined in

[src/Utilities.ts:54](https://github.com/d4lton/node-common/blob/60b873c/src/Utilities.ts#L54)

___

### sleep

▸ `Static` **sleep**(`ms`, `controller?`): `Promise`<`void`\>

Pause execution for a number of milliseconds.

#### Parameters

| Name | Type |
| :------ | :------ |
| `ms` | `number` |
| `controller?` | `AbortController` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/Utilities.ts:10](https://github.com/d4lton/node-common/blob/60b873c/src/Utilities.ts#L10)

___

### truncateMiddle

▸ `Static` **truncateMiddle**(`value`, `maxLength?`): `string`

Given a value, return a string representation, truncating the string in the middle if it is longer than the given maxLength.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | `any` | `undefined` |
| `maxLength` | `number` | `128` |

#### Returns

`string`

#### Defined in

[src/Utilities.ts:71](https://github.com/d4lton/node-common/blob/60b873c/src/Utilities.ts#L71)
