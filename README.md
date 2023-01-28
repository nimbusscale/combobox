This repo is intended to show a possible bug with the clr-combobox component.

When loading the app there is a single page with a combobox allowing the choice of two items. The method  `onSelectionChange` is bound to the `clrSelectionChange` output to log the value of the emitted event and `this.selection`.

The console logs show what one would expect when selecting the CA as the first item. Both the event and the selection var show the object for CA selected.

```
event: {"model":[{"name":"CA"}]}
selection: [{"name":"CA"}]
```

Removing the selected CA item from the combobox also shows what one would expect, an empty selection array and the event model to be null.

```
event: {"model":null}
selection: []
```

But then adding any item back to the combobox has unexpected results. Here we see that the event includes the selected object in it's model, but the selection var is null.

```
event: {"model":[{"name":"CA"}]}
selection: null
```

