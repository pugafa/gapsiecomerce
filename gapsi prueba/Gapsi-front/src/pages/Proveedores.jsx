
import React, { useEffect, useState } from 'react';
import ToastComp from '../components/common/toastComponent';
import api from '../Services/data';
import BasicModal from '../components/Proveedores/proveedor';
import DataTable from '../components/Proveedores/DataTable';
import { toast } from 'react-toastify';


const ProveedoresPage = () => {
 
  const [mydata, setMyData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [proveedor, setProveedor] = useState(0);
  const [modalStatus, setModalStatus] = useState(false)
  const [editText, setEditText] = useState("")
  const [method, setMethod] = useState("post");
  const toastDuration = 2000;
  async function handleViewOpen(value) {
      setMethod("")
      setModalStatus(true);
      setOpen(true);
      setProveedor(value);

      // console.log(proveedor)

  }
  const handleClose = () => {
      setProveedor(0);
      setEditText("");
      setModalStatus(false);
      setMethod("")
      setOpen(false)

  };

  function handleEditOpen(value) {
      setModalStatus(false);
      if (value === 0) {
          setMethod("post")
      } else {
          setMethod("patch");
      }
      setOpen(true);
      setProveedor(value);
  }

  useEffect(() => {
      console.log(mydata)
      setTimeout(() => {
          renderData()
      }, 1000)
  }, [])

  useEffect(() => {
      if (editText === "Edited Successfully" || editText === "Created Successfully" || editText === "Deleted Successfully") {
          toast.success(editText, {
              position: toast.POSITION.TOP_RIGHT,
              className: 'foo-bar',
              pauseOnHover: false,
              autoClose: toastDuration,
              theme: "dark"
          });
      } else if (editText === "Error Ocurred") {
          toast.error(editText, {
              position: toast.POSITION.TOP_RIGHT,
              className: 'foo-bar',
              pauseOnHover: false,
              autoClose: toastDuration,
              theme: "dark"
          });
      }
  }, [editText])
  function renderData() {
      api.getAllData()
          .then((result) => setMyData(result));
      setLoading(false);
  }
  async function handleSubmit(id, formData) {
      console.log("submitting");
      console.log(method);
      if (method === "post") {
          console.log(formData)
          api.createProveedor(formData)
              .then((result) => {
                  if (result.status === "ok") {
                      console.log("creating")
                      setEditText("Created Successfully");
                      renderData();
                  } else {
                      setEditText("Error occured");

                  }
              })
      } else if (method === "patch") {
          api.editProveedor(id, formData)
              .then((result) => {
                  console.log(result)
                  if (result.status === "ok") {
                      console.log("successfully updated")
                      setEditText("Edited Successfully");
                      renderData();

                  } else {
                      console.log("failed to edit")
                      setEditText("Error occured");

                  }
              })
      }
      setOpen(false);
  }

  async function handleDelete(items) {
      console.log(items)
      const toDelete = [];
      items.forEach((item) => {
          console.log(item)
          let data = mydata[item]

          toDelete.push(data.id);

      })
      console.log(toDelete)
      api.deleteProveedor(toDelete)
          .then((result) => {
              console.log(result)
              if (result.status === "ok") {
                  setEditText("Deleted Successfully");
                  renderData();

              } else {
                  console.log("failed to edit")
                  setEditText("Error occured");

              }
          })
  }
  return (
      <div>
          {(loading) &&
              <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_LBnGq7OY4M.json" mode="bounce" background="transparent" speed="1" style={{ width: "500px", height: "500px", margin: "0 auto" }} loop autoplay></lottie-player>
          }
          {(!loading) &&
              <DataTable handleOpen={handleViewOpen} mydata={mydata} handleEditOpen={handleEditOpen} handleDelete={handleDelete} />
          }
          <BasicModal open={open} handleClose={handleClose} proveedor={proveedor} status={modalStatus} method={method} handleSubmit={handleSubmit} />
          <ToastComp />
      </div>
  )
};

export default ProveedoresPage;