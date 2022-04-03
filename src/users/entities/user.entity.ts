import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Password } from 'src/utils/Password';
export type UserDocument = User & Document;

@Schema()
@ObjectType()
export class User {
  @Field({ nullable: true })
  id?: string;

  @Prop({ type: String, required: true })
  @Field()
  username: string;

  @Prop({ type: String, required: true, unique: true })
  @Field()
  email: string;

  @Prop({ type: String })
  @Field({ nullable: true })
  password?: string;

  @Prop({ type: String, default: 'admin' })
  role?: string;
}
export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.pre('save', async function () {
  const user = this;

  if ((this as UserDocument).password && this.isModified('password')) {
    // (this as UserDocument).password = await hash(
    //   (this as UserDocument).password,
    //   10,
    // );
    (this as UserDocument).password = await Password.hash(
      (this as UserDocument).password,
    );
  }
});
