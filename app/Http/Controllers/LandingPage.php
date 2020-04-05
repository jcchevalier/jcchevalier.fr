<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactForm;
use App\Mail\ContactMail;
use Illuminate\Contracts\View\Factory;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\View\View;

/**
 * Class LandingPage
 *
 * @package App\Http\Controllers
 */
class LandingPage extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param Request $request
     *
     * @return Factory|View
     */
    public function display(Request $request)
    {
        return view('landing_page.main');
    }
    
    /**
     * @param ContactForm $request
     * @return JsonResponse
     */
    public function contactForm(ContactForm $request)
    {
    
        if (isset($request->errors)) {
            return response()->json($request->errors, 400);
        }
    
        Mail::to(env("MAIL_ADMIN"))
            ->send(
                new ContactMail(
                    $request->validated()
                )
            );
    
        return response()->json("Thanks for submitting your message", 200);
    
    }
}
