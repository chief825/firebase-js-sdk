<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@firebase/firestore](./firestore.md) &gt; [/](./firestore_.md) &gt; [onSnapshot](./firestore_.onsnapshot_3.md)

## onSnapshot() function

<b>Signature:</b>

```typescript
export function onSnapshot<T>(
  reference: DocumentReference<T>,
  options: SnapshotListenOptions,
  onNext: (snapshot: DocumentSnapshot<T>) => void,
  onError?: (error: FirestoreError) => void,
  onCompletion?: () => void
): () => void;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  reference | [DocumentReference](./firestore_.documentreference.md)<!-- -->&lt;T&gt; |  |
|  options | [SnapshotListenOptions](./firestore_.snapshotlistenoptions.md) |  |
|  onNext | (snapshot: [DocumentSnapshot](./firestore_.documentsnapshot.md)<!-- -->&lt;T&gt;) =&gt; void |  |
|  onError | (error: [FirestoreError](./firestore_.firestoreerror.md)<!-- -->) =&gt; void |  |
|  onCompletion | () =&gt; void |  |

<b>Returns:</b>

() =&gt; void
