import { Guid } from 'guid-typescript';

export function generateGuid(prefix: string): string {
    return prefix + Guid.create().toString();
}
