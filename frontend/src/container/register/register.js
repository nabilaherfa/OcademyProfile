import React, { Component } from 'react';

const myStyle={
    backgroundImage: 
    "url('/images/register-circle.svg')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'auto',
};

export class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            'nama': '',
            'username': '',
            'password': '',
            'email': '',
            'daftar': '',
            'asal_sekolah': '',
            'tau': ''
        }
    }

    render() {
        return (
            <>
                <div class="lg:p-10 pb-16 lg:pb-36 grid grid-1 lg:grid-cols-2 bg-background">
                    <div>
                        <img src="/images/register.svg" alt="register" />
                    </div>
                    <form style={myStyle} class="p-10 bg-white rounded-lg shadow-md w-3/4 mx-auto">
                        <h2 class="text-2xl font-bold font-open-sans text-center text-register-title-oren lg:pb-4">Register</h2>
                        <div class="mb-6">
                            <label class="block text-lg font-header font-roboto mb-2 text-register-subtitle-oren font-semibold" for="nama">Nama</label>
                            <input class="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="nama" type="text" placeholder="Nama" onChange = {this.handlerChange} required/>
                        </div>
                        <div class="mb-6">
                            <label class="block text-lg font-header font-roboto mb-2 text-register-subtitle-oren font-semibold" for="username">Username</label>
                            <input class="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="username" type="text" placeholder="Username" onChange = {this.handlerChange} required/>
                        </div>
                        <div class="mb-6">
                            <label class="block text-lg font-header font-roboto mb-2 text-register-subtitle-oren font-semibold" for="password">Password</label>
                            <input class="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="password" type="varchar" placeholder="Password" onChange = {this.handlerChange} required/>
                        </div>
                        <div class="mb-6">
                            <label class="block text-lg font-header font-roboto mb-2 text-register-subtitle-oren font-semibold" for="email">Email</label>
                            <input class="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="email" type="text" text="Email" placeholder="Email" onChange = {this.handlerChange} required/>
                        </div>
                        <div class="inline-block relative mb-6">
                            <label class="block text-lg font-header font-roboto mb-2 text-register-subtitle-oren font-semibold" for="daftar-apa">Daftar Apa?</label>
                            <select class="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="daftar-apa" type="varchar" placeholder="daftar-apa" onChange = {this.handlerChange} required>
                                <option class="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" value="">Daftar apa</option>
                            </select>
                        </div>
                        <div class="mb-6">
                            <label class="block text-lg font-header font-roboto mb-2 text-register-subtitle-oren font-semibold" for="asal-sekolah">Asal Sekolah</label>
                            <input class="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="asal-sekolah" type="varchar" placeholder="Asal Sekolah" onChange = {this.handlerChange} required/>
                        </div>
                        <div class="inline-block relative mb-6">
                            <label class="block text-lg font-header font-roboto mb-2 text-register-subtitle-oren font-semibold" for="tau">Tau Ocademy Darimana?</label>
                            <select class="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="tau" type="varchar" placeholder="Tau Darimana" onChange = {this.handlerChange} required>
                                <option class="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" value="">Tau darimana</option>
                            </select>
                        </div>
                        <div class="flex justify-center">
                            <button type="button" class="bg-oren3 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                <p class="px-10 py-1 text-white font-semibold">Daftar</p>
                            </button>
                        </div>
                        <div class="flex justify-center p-3 text-register-subtitle-oren">
                            <p class="text-center">Sudah Punya Akun?<a href='/' class="font-bold"> Login</a></p>
                        </div>
                    </form>
                </div>
            </>
        );
    }
}

export default Register;