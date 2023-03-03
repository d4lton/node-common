[@d4lton/node-common](../README.md) / [Exports](../modules.md) / ObjectUtilities

# Class: ObjectUtilities

## Table of contents

### Constructors

- [constructor](ObjectUtilities.md#constructor)

### Methods

- [getDottedKeyValue](ObjectUtilities.md#getdottedkeyvalue)
- [getKeysDeep](ObjectUtilities.md#getkeysdeep)
- [setDottedKeyValue](ObjectUtilities.md#setdottedkeyvalue)

## Constructors

### constructor

• **new ObjectUtilities**()

## Methods

### getDottedKeyValue

▸ `Static` **getDottedKeyValue**(`key`, `object`, `defaultValue?`): `any`

Get a dot-separated key from an object. If not found, return defaultValue.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `object` | `any` |
| `defaultValue?` | `any` |

#### Returns

`any`

#### Defined in

[src/ObjectUtilities.ts:12](https://github.com/d4lton/node-common/blob/60b873c/src/ObjectUtilities.ts#L12)

___

### getKeysDeep

▸ `Static` **getKeysDeep**(`object`, `parent?`): `any`[]

Get all the keys for an object as an array of dot-separated strings.

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `any` |
| `parent?` | `any` |

#### Returns

`any`[]

#### Defined in

[src/ObjectUtilities.ts:52](https://github.com/d4lton/node-common/blob/60b873c/src/ObjectUtilities.ts#L52)

___

### setDottedKeyValue

▸ `Static` **setDottedKeyValue**(`key`, `value`, `object`): `void`

Set a dot-separated key's value into an object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `any` |
| `object` | `any` |

#### Returns

`void`

#### Defined in

[src/ObjectUtilities.ts:39](https://github.com/d4lton/node-common/blob/60b873c/src/ObjectUtilities.ts#L39)
