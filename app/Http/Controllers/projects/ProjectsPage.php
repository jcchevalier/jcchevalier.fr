<?php

namespace App\Http\Controllers\projects;

use App\Http\Controllers\Controller;
use Illuminate\Contracts\View\Factory;
use Illuminate\Http\Request;
use Illuminate\View\View;

/**
 * Class ProjectsPage
 *
 * @package App\Http\Controllers
 */
class ProjectsPage extends Controller
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
        return view('projects.main');
    }
}
