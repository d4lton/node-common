[@d4lton/node-common](../README.md) / [Exports](../modules.md) / HttpAcceptedError

# Class: HttpAcceptedError

Copyright ©2022 Dana Basken

## Hierarchy

- [`HttpError`](HttpError.md)

  ↳ **`HttpAcceptedError`**

## Table of contents

### Constructors

- [constructor](HttpAcceptedError.md#constructor)

### Properties

- [cause](HttpAcceptedError.md#cause)
- [http\_code](HttpAcceptedError.md#http_code)
- [message](HttpAcceptedError.md#message)
- [name](HttpAcceptedError.md#name)
- [stack](HttpAcceptedError.md#stack)
- [prepareStackTrace](HttpAcceptedError.md#preparestacktrace)
- [stackTraceLimit](HttpAcceptedError.md#stacktracelimit)

### Methods

- [captureStackTrace](HttpAcceptedError.md#capturestacktrace)

## Constructors

### constructor

• **new HttpAcceptedError**(`message?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Overrides

[HttpError](HttpError.md).[constructor](HttpError.md#constructor)

#### Defined in

[src/errors/HttpAcceptedError.ts:9](https://github.com/d4lton/node-common/blob/5a7ce4e/src/errors/HttpAcceptedError.ts#L9)

## Properties

### cause

• `Optional` **cause**: `unknown`

#### Inherited from

[HttpError](HttpError.md).[cause](HttpError.md#cause)

#### Defined in

node_modules/typescript/lib/lib.es2022.error.d.ts:26

___

### http\_code

• **http\_code**: `number`

#### Inherited from

[HttpError](HttpError.md).[http_code](HttpError.md#http_code)

#### Defined in

[src/errors/HttpError.ts:7](https://github.com/d4lton/node-common/blob/5a7ce4e/src/errors/HttpError.ts#L7)

___

### message

• **message**: `string`

#### Inherited from

[HttpError](HttpError.md).[message](HttpError.md#message)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1054

___

### name

• **name**: `string`

#### Inherited from

[HttpError](HttpError.md).[name](HttpError.md#name)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1053

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

[HttpError](HttpError.md).[stack](HttpError.md#stack)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1055

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

**`See`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

#### Inherited from

[HttpError](HttpError.md).[prepareStackTrace](HttpError.md#preparestacktrace)

#### Defined in

node_modules/@types/node/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

[HttpError](HttpError.md).[stackTraceLimit](HttpError.md#stacktracelimit)

#### Defined in

node_modules/@types/node/globals.d.ts:13

## Methods

### captureStackTrace

▸ `Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

[HttpError](HttpError.md).[captureStackTrace](HttpError.md#capturestacktrace)

#### Defined in

node_modules/@types/node/globals.d.ts:4
