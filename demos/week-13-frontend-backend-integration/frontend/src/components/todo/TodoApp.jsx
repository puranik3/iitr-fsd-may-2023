import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AuthenticatedRoute from "./AuthenticatedRoute.jsx";
import LoginComponent from "./LoginComponent.jsx";
import HeaderComponent from "./HeaderComponent.jsx";
import FooterComponent from "./FooterComponent.jsx";
import ErrorComponent from "./ErrorComponent.jsx";
import WelcomeComponent from "./WelcomeComponent.jsx";
import ListTodosComponent from "./ListTodosComponent.jsx";
import TodoComponent from "./TodoComponent.jsx";

class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
                <BrowserRouter>
                    <HeaderComponent  />
                    <Routes>
                        <Route
                            path="/"
                            element={<LoginComponent />}
                        />
                        <Route
                            path="/login"
                            element={<LoginComponent />}
                        />
                        <Route
                            path="/welcome/:name"
                            element={
                                <AuthenticatedRoute>
                                    <WelcomeComponent />
                                </AuthenticatedRoute>
                            }
                        />
                        <Route
                            path="/todos"
                            element={
                                <AuthenticatedRoute>
                                    <ListTodosComponent />
                                </AuthenticatedRoute>
                            }
                        />
                        <Route
                            path="/todos/:id"
                            element={
                                <AuthenticatedRoute>
                                    <TodoComponent />
                                </AuthenticatedRoute>
                            }
                        />
                        <Route path="*" element={<ErrorComponent />} />
                    </Routes>
                    <FooterComponent />
                </BrowserRouter>
            </div>
        );
    }
}

export default TodoApp;
