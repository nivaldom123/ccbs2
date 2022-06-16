import React from "react"

interface StateTypes {
    error: boolean;
    loading: boolean;
    response: [];
}

interface ActionTypes {
    type: string;
    payload: any;
}
