import CryptoJS from 'crypto-js';
import AdminSchema from '@/models/admin.schema';

export async function createAdmin(): Promise<any> {
  const username = process.env.DEFAULT_ADMIN_USERNAME!;
  const password = process.env.DEFAULT_ADMIN_PASSWORD!;

  try {
    const admin = await AdminSchema.findOne({ username: username });

    if (admin !== null) {
      return true;
    }

    const newAdmin = new AdminSchema({
      username,
      password: CryptoJS.AES.encrypt(
        password!,
        process.env.PASSWORD_SECRET_KEY!
      ),
    });

    console.log('--------------------------');
    console.log('Admin created with');
    console.log(`Username => ${username}`);
    console.log(`Password => ${password}`);
    console.log('--------------------------');
    await newAdmin.save();
    return;
  } catch (error) {
    console.error(error);
  }
}
