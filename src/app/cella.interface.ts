export interface cell {
  type: typeEnum;
  disabled: boolean;
  x: string;
  y: string;
}

export enum typeEnum {
  sea = 'sea',
  ship = 'ship',
}
