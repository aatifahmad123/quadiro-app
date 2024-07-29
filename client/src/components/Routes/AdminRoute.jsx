import { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";

export default function AdminRoute() {
  const [ok, setOk] = useState(false);
  const [auth, setAuth] = useAuth();

  const apiurl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const authCheck = async () => {
      const res = await axios.get(`${apiurl}/api/v1/auth/admin-auth`,
        {
            headers:{
                "Authorization" : auth?.token
            }
        }
      );
      if (res.data.ok) {
        setOk(true);
      } else {
        setOk(false);
      }
    };
    if (auth?.token) authCheck();
  }, [auth?.token]);

  return ok ? <Outlet></Outlet> : <Spinner></Spinner>
}