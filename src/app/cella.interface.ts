export interface cell {
  type: typeEnum;
  disabled: boolean;
  x: string;
  y: string;
  ship: boolean;
}

export enum typeEnum {
  sea = 'sea',
  ship = 'ship',
}
