[@d4lton/node-common](../README.md) / [Exports](../modules.md) / HttpError

# Class: HttpError

Copyright ©2022 Dana Basken

## Hierarchy

- `Error`

  ↳ **`HttpError`**

  ↳↳ [`HttpAcceptedError`](HttpAcceptedError.md)

  ↳↳ [`HttpConflictError`](HttpConflictError.md)

  ↳↳ [`HttpInternalServerError`](HttpInternalServerError.md)

  ↳↳ [`HttpResourceNotFoundError`](HttpResourceNotFoundError.md)

  ↳↳ [`HttpUnauthorizedError`](HttpUnauthorizedError.md)

  ↳↳ [`HttpUnprocessableEntityError`](HttpUnprocessableEntityError.md)

## Table of contents

### Constructors

- [constructor](HttpError.md#constructor)

### Properties

- [cause](HttpError.md#cause)
- [http\_code](HttpError.md#http_code)
- [message](HttpError.md#message)
- [name](HttpError.md#name)
- [stack](HttpError.md#stack)
- [prepareStackTrace](HttpError.md#preparestacktrace)
- [stackTraceLimit](HttpError.md#stacktracelimit)

### Methods

- [captureStackTrace](HttpError.md#capturestacktrace)

## Constructors

### constructor

• `Protected` **new HttpError**(`code`, `message?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `number` |
| `message?` | `string` |

#### Overrides

Error.constructor

#### Defined in

[src/errors/HttpError.ts:9](https://github.com/d4lton/node-common/blob/60b873c/src/errors/HttpError.ts#L9)

## Properties

### cause

• `Optional` **cause**: `unknown`

#### Inherited from

Error.cause

#### Defined in

node_modules/typescript/lib/lib.es2022.error.d.ts:26

___

### http\_code

• **http\_code**: `number`

#### Defined in

[src/errors/HttpError.ts:7](https://github.com/d4lton/node-common/blob/60b873c/src/errors/HttpError.ts#L7)

___

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1054

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1053

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

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

Error.prepareStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

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

Error.captureStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:4
