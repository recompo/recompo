---
sidebar-position: 2
---

### Description

A Button Component with different variants

### Available Props

- color: `primary`,`success`,`error`,`info`,`warning`,`inherit`,`secondary`
- disabled: If set to `true` button will be disabled. Defaults `false`

### Usage

```js
import { Button } from "recompo";
// OR
import Button "recompo/components/Button";

const App = () => {
  return (
    <>
      <Button color="primary">Hello World</Button>
    </>
  );
};
```

Some Screenshots:
1. Primary
![image](https://user-images.githubusercontent.com/76196237/159159195-f9763ac2-37cb-4f59-a025-e12daba394cf.png)
2. Secondary
![image](https://user-images.githubusercontent.com/76196237/159159204-0a2930a8-cd1e-4d90-a06d-f4d0518e0b08.png)
3. Success
![image](https://user-images.githubusercontent.com/76196237/159159210-c50c097f-3938-4d84-9abe-6735b4ddad93.png)
4. Error
![image](https://user-images.githubusercontent.com/76196237/159159221-14c85b15-4ef3-461c-a299-0ea533004ea1.png)
5. Info
![image](https://user-images.githubusercontent.com/76196237/159159230-37c906a8-71f8-47e6-9a7f-ebef9873ae27.png)
6. Warning
![image](https://user-images.githubusercontent.com/76196237/159159239-a1b522ec-6021-4f27-8252-390a3bae7099.png)
