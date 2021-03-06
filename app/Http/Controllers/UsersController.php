<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Http\Requests;
use Illuminate\Validation\Validator;

class UsersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index() {
        return $this->helpReturn(User::with('events')->with('favorites')->get());
    }


    public function show($id) {
        return $this->helpReturn(User::with('events')->with('favorites')->findorfail($id));
    }

    public function forPush(Request $request,$category_id){
        if($category_id == 'all'){
            return $this->helpReturn(
                User::where('lon','>',"0")
                    ->where('lat','>',"0")
                    ->get()
            );
        }else{
            return $this->helpReturn(
                User::where('lon','>',"0")
                    ->where('lat','>',"0")
                    ->where('category_id',$category_id)
                    ->get()
            );
        }

    }


    /**
     * @api {post} /v1/users/auth/email AuthByEmail
     * @apiVersion 0.1.0
     * @apiName AuthByEmail
     * @apiGroup Users
     *
     * @apiParam {string} email
     * @apiParam {string} password
     *
     */
    /**
     * @api {post} /v1/users/auth/:type AuthBySocial
     * @apiVersion 0.1.0
     * @apiName AuthBySocial
     * @apiGroup Users
     *
     * @apiParam {string='vk','fb','hidden'} type Hidden=если пользователь ни как не авторизировался для учёта инфы
     * @apiParam {string} name
     * @apiParam {string} social_hash
     *
     */
    /**
     * @api {post} /v1/users/auth/hidden AuthByHidden
     * @apiVersion 0.1.0
     * @apiName AuthByHidden
     * @apiGroup Users
     *
     * @apiParam {string} imei
     *
     */
    public function auth(Request $request, $type = 'email') {
        if ($type == 'email') {
            $data['email'] = $request->email;
            $data['password'] = md5($request->password . 'requestLoginEvstolia');
            $user = User::where('email', '=', $data['email'])->where('password', '=', $data['password'])->first();
            if ($user) {
                return $this->helpReturn($user);
            } else {
                return $this->helpError('Wrong credentials');
            }
        } elseif ($type == 'fb' or $type == 'vk') {
            $user = User::where('social_hash', '=', $request->social_hash)->first();
            if (!$user) {
                $user = new User;
                $user->social_hash = $request->social_hash;
                $user->name = $request->name;
                $user->token = md5(uniqid() . md5(date("h:m")));
                $user->type = 'social';
                $user->save();
                return $this->helpReturn($user);
            } else {
                return $this->helpReturn($user, null, 'hey');
            }
        } elseif ($type == 'hidden') {
            $imei = $request->imei;
            $user = User::where('imei', '=', $imei)->first();
            if (!$user) {
                $user = new User;
                $user->imei = $request->imei;
                $user->token = md5(uniqid() . md5(date("h:m")));
                $user->type = 'hidden';
                $user->save();
                return $this->helpReturn($user);
            } else {
                return $this->helpReturn($user);
            }
        }
    }

    public function create() {
        //
    }

    /**
     * @api {post} /v1/users regUser
     * @apiVersion 0.1.0
     * @apiName regUser
     * @apiGroup Users
     *
     * @apiDescription Только для авторизации по имейлу нужна регистрация,в остальных случаях она автоматическая
     * @apiParam {string} name
     * @apiParam {string} email
     * @apiParam {string} password
     *
     */
    public function store(Request $request) {
        $rules = ['name' => 'required|min:3', 'email' => 'required|unique:users', 'password' => 'required'];
        $valid = Validator($request->all(), $rules);
        if (!$valid->fails()) {
            $user = new User;
            $user->name = $request->name;
            $user->email = $request->email;
            $user->password = md5($request->password . 'requestLoginEvstolia');
            $user->token = md5(uniqid() . md5(date("h:m")));
            $user->type = 'email';
            $user->save();
            return $this->helpReturn($user);
        } else {
            return $this->helpError('valid', $valid);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id) {
        return $this->getSchemaByModel(User::first(),['type']);
    }

    /**
     * @api {post} /v1/users/:id updateUser
     * @apiVersion 0.1.0
     * @apiName updateUser
     * @apiGroup Users
     *
     * @apiHeader {string} token User token
     * @apiDescription При редактировании, если нужно какое-то определённое поле, в других должно быть false (bool)
     * @apiParam {string} name
     * @apiParam {file} image
     * @apiParam {string} email
     * @apiParam {string} password
     * @apiParam {string} [phone_1]
     * @apiParam {string} [phone_2]
     * @apiParam {string} [phone_3]
     * @apiParam {string} location
     * @apiParam {string} lon
     * @apiParam {string} lat
     * @apiParam {string} category_id
     * @apiParam {string} place_id
     * @apiParam {string} email
     * @apiParam {string} password
     * @apiParam {string} description
     *
     * @apiParam {string="ios","android"} device_type для пушей
     * @apiParam {string} device_token
     *
     */
    public function update(Request $request, $id) {
        //return var_dump($request->all());
        $rules = ['device_type'=>false,'device_token'=>false,'balance'=>false,'description'=>false,'image'=>false,'description'=>false,'phone_1'=>false,'phone_2'=>false,'phone_3'=>false,'name' => false, 'location' => false, 'lon' => false, 'lat' => false, 'category_id' => false,  'email' => false, 'password' => false,'place_id'=>false];
        $user = User::findorfail($id);
        return $this->fromPostToModel($rules, $user, $request);
    }
    public function ban($id){
        $user = User::findorfail($id);
        $user->banned = 1;
        $user->save();
        return $this->helpReturn($user);
    }
    public function unban($id){
        $user = User::findorfail($id);
        $user->banned = 0;
        $user->save();
        return $this->helpReturn($user);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id) {
        //
    }
}
