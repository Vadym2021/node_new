import {
    Column, Entity, OneToMany, PrimaryGeneratedColumn,
} from 'typeorm';
import { CommonFields } from './commonfields';
import { Post } from './post';

export interface IUser {
    id: number;
    firstName: string;
    age?: number;
    phone: string;
    email: string;
    password: string;
    posts: any[];
}

@Entity('users', { database: 'okten' })
export class User extends CommonFields implements IUser {
    @PrimaryGeneratedColumn()
        id:number;

    @Column({
        type: 'varchar',
        width: 255,
        nullable: false,
    })
        firstName: string;

    @Column({
        type: 'varchar',
        width: 255,
        nullable: false,
    })
        lastName: string;

    @Column({
        type: 'int',
    })
        age?: number;

    @Column({
        type: 'varchar',
        width: 255,
        nullable: false,
        unique: true,
    })
        phone: string;

    @Column({
        type: 'varchar',
        width: 255,
        nullable: false,
        unique: true,
    })
        email: string;

    @Column({
        type: 'varchar',
        width: 255,
        nullable: false,
    })
        password: string;

    @OneToMany(() => Post, (post) => post.user)
        posts: Post[];
}
