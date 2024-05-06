

/* this ALWAYS GENERATED file contains the definitions for the interfaces */


 /* File created by MIDL compiler version 8.xx.xxxx */
/* at a redacted point in time
 */
/* Compiler settings for gen/chrome/updater/app/server/win/updater_internal_idl_system.idl:
    Oicf, W1, Zp8, env=Win32 (32b run), target_arch=X86 8.xx.xxxx 
    protocol : dce , ms_ext, c_ext, robust
    error checks: allocation ref bounds_check enum stub_data 
    VC __declspec() decoration level: 
         __declspec(uuid()), __declspec(selectany), __declspec(novtable)
         DECLSPEC_UUID(), MIDL_INTERFACE()
*/
/* @@MIDL_FILE_HEADING(  ) */

#pragma warning( disable: 4049 )  /* more than 64k source lines */


/* verify that the <rpcndr.h> version is high enough to compile this file*/
#ifndef __REQUIRED_RPCNDR_H_VERSION__
#define __REQUIRED_RPCNDR_H_VERSION__ 475
#endif

#include "rpc.h"
#include "rpcndr.h"

#ifndef __RPCNDR_H_VERSION__
#error this stub requires an updated version of <rpcndr.h>
#endif /* __RPCNDR_H_VERSION__ */

#ifndef COM_NO_WINDOWS_H
#include "windows.h"
#include "ole2.h"
#endif /*COM_NO_WINDOWS_H*/

#ifndef __updater_internal_idl_system_h__
#define __updater_internal_idl_system_h__

#if defined(_MSC_VER) && (_MSC_VER >= 1020)
#pragma once
#endif

#ifndef DECLSPEC_XFGVIRT
#if defined(_CONTROL_FLOW_GUARD_XFG)
#define DECLSPEC_XFGVIRT(base, func) __declspec(xfg_virtual(base, func))
#else
#define DECLSPEC_XFGVIRT(base, func)
#endif
#endif

/* Forward Declarations */ 

#ifndef __IUpdaterInternalCallback_FWD_DEFINED__
#define __IUpdaterInternalCallback_FWD_DEFINED__
typedef interface IUpdaterInternalCallback IUpdaterInternalCallback;

#endif 	/* __IUpdaterInternalCallback_FWD_DEFINED__ */


#ifndef __IUpdaterInternalCallbackSystem_FWD_DEFINED__
#define __IUpdaterInternalCallbackSystem_FWD_DEFINED__
typedef interface IUpdaterInternalCallbackSystem IUpdaterInternalCallbackSystem;

#endif 	/* __IUpdaterInternalCallbackSystem_FWD_DEFINED__ */


#ifndef __IUpdaterInternal_FWD_DEFINED__
#define __IUpdaterInternal_FWD_DEFINED__
typedef interface IUpdaterInternal IUpdaterInternal;

#endif 	/* __IUpdaterInternal_FWD_DEFINED__ */


#ifndef __IUpdaterInternalSystem_FWD_DEFINED__
#define __IUpdaterInternalSystem_FWD_DEFINED__
typedef interface IUpdaterInternalSystem IUpdaterInternalSystem;

#endif 	/* __IUpdaterInternalSystem_FWD_DEFINED__ */


#ifndef __UpdaterInternalUserClass_FWD_DEFINED__
#define __UpdaterInternalUserClass_FWD_DEFINED__

#ifdef __cplusplus
typedef class UpdaterInternalUserClass UpdaterInternalUserClass;
#else
typedef struct UpdaterInternalUserClass UpdaterInternalUserClass;
#endif /* __cplusplus */

#endif 	/* __UpdaterInternalUserClass_FWD_DEFINED__ */


#ifndef __UpdaterInternalSystemClass_FWD_DEFINED__
#define __UpdaterInternalSystemClass_FWD_DEFINED__

#ifdef __cplusplus
typedef class UpdaterInternalSystemClass UpdaterInternalSystemClass;
#else
typedef struct UpdaterInternalSystemClass UpdaterInternalSystemClass;
#endif /* __cplusplus */

#endif 	/* __UpdaterInternalSystemClass_FWD_DEFINED__ */


#ifndef __IUpdaterInternalCallbackSystem_FWD_DEFINED__
#define __IUpdaterInternalCallbackSystem_FWD_DEFINED__
typedef interface IUpdaterInternalCallbackSystem IUpdaterInternalCallbackSystem;

#endif 	/* __IUpdaterInternalCallbackSystem_FWD_DEFINED__ */


#ifndef __IUpdaterInternalSystem_FWD_DEFINED__
#define __IUpdaterInternalSystem_FWD_DEFINED__
typedef interface IUpdaterInternalSystem IUpdaterInternalSystem;

#endif 	/* __IUpdaterInternalSystem_FWD_DEFINED__ */


/* header files for imported files */
#include "oaidl.h"
#include "ocidl.h"

#ifdef __cplusplus
extern "C"{
#endif 


#ifndef __IUpdaterInternalCallback_INTERFACE_DEFINED__
#define __IUpdaterInternalCallback_INTERFACE_DEFINED__

/* interface IUpdaterInternalCallback */
/* [unique][helpstring][uuid][oleautomation][object] */ 


EXTERN_C const IID IID_IUpdaterInternalCallback;

#if defined(__cplusplus) && !defined(CINTERFACE)
    
    MIDL_INTERFACE("894794fb-535e-4b6b-8d00-e58f41a72c95")
    IUpdaterInternalCallback : public IUnknown
    {
    public:
        virtual HRESULT STDMETHODCALLTYPE Run( 
            /* [in] */ LONG result) = 0;
        
    };
    
    
#else 	/* C style interface */

    typedef struct IUpdaterInternalCallbackVtbl
    {
        BEGIN_INTERFACE
        
        DECLSPEC_XFGVIRT(IUnknown, QueryInterface)
        HRESULT ( STDMETHODCALLTYPE *QueryInterface )( 
            IUpdaterInternalCallback * This,
            /* [in] */ REFIID riid,
            /* [annotation][iid_is][out] */ 
            _COM_Outptr_  void **ppvObject);
        
        DECLSPEC_XFGVIRT(IUnknown, AddRef)
        ULONG ( STDMETHODCALLTYPE *AddRef )( 
            IUpdaterInternalCallback * This);
        
        DECLSPEC_XFGVIRT(IUnknown, Release)
        ULONG ( STDMETHODCALLTYPE *Release )( 
            IUpdaterInternalCallback * This);
        
        DECLSPEC_XFGVIRT(IUpdaterInternalCallback, Run)
        HRESULT ( STDMETHODCALLTYPE *Run )( 
            IUpdaterInternalCallback * This,
            /* [in] */ LONG result);
        
        END_INTERFACE
    } IUpdaterInternalCallbackVtbl;

    interface IUpdaterInternalCallback
    {
        CONST_VTBL struct IUpdaterInternalCallbackVtbl *lpVtbl;
    };

    

#ifdef COBJMACROS


#define IUpdaterInternalCallback_QueryInterface(This,riid,ppvObject)	\
    ( (This)->lpVtbl -> QueryInterface(This,riid,ppvObject) ) 

#define IUpdaterInternalCallback_AddRef(This)	\
    ( (This)->lpVtbl -> AddRef(This) ) 

#define IUpdaterInternalCallback_Release(This)	\
    ( (This)->lpVtbl -> Release(This) ) 


#define IUpdaterInternalCallback_Run(This,result)	\
    ( (This)->lpVtbl -> Run(This,result) ) 

#endif /* COBJMACROS */


#endif 	/* C style interface */




#endif 	/* __IUpdaterInternalCallback_INTERFACE_DEFINED__ */


#ifndef __IUpdaterInternalCallbackSystem_INTERFACE_DEFINED__
#define __IUpdaterInternalCallbackSystem_INTERFACE_DEFINED__

/* interface IUpdaterInternalCallbackSystem */
/* [unique][helpstring][uuid][oleautomation][object] */ 


EXTERN_C const IID IID_IUpdaterInternalCallbackSystem;

#if defined(__cplusplus) && !defined(CINTERFACE)
    
    MIDL_INTERFACE("73209e3a-80b6-44dd-98a6-e72bd4bae9ac")
    IUpdaterInternalCallbackSystem : public IUnknown
    {
    public:
        virtual HRESULT STDMETHODCALLTYPE Run( 
            /* [in] */ LONG result) = 0;
        
    };
    
    
#else 	/* C style interface */

    typedef struct IUpdaterInternalCallbackSystemVtbl
    {
        BEGIN_INTERFACE
        
        DECLSPEC_XFGVIRT(IUnknown, QueryInterface)
        HRESULT ( STDMETHODCALLTYPE *QueryInterface )( 
            IUpdaterInternalCallbackSystem * This,
            /* [in] */ REFIID riid,
            /* [annotation][iid_is][out] */ 
            _COM_Outptr_  void **ppvObject);
        
        DECLSPEC_XFGVIRT(IUnknown, AddRef)
        ULONG ( STDMETHODCALLTYPE *AddRef )( 
            IUpdaterInternalCallbackSystem * This);
        
        DECLSPEC_XFGVIRT(IUnknown, Release)
        ULONG ( STDMETHODCALLTYPE *Release )( 
            IUpdaterInternalCallbackSystem * This);
        
        DECLSPEC_XFGVIRT(IUpdaterInternalCallbackSystem, Run)
        HRESULT ( STDMETHODCALLTYPE *Run )( 
            IUpdaterInternalCallbackSystem * This,
            /* [in] */ LONG result);
        
        END_INTERFACE
    } IUpdaterInternalCallbackSystemVtbl;

    interface IUpdaterInternalCallbackSystem
    {
        CONST_VTBL struct IUpdaterInternalCallbackSystemVtbl *lpVtbl;
    };

    

#ifdef COBJMACROS


#define IUpdaterInternalCallbackSystem_QueryInterface(This,riid,ppvObject)	\
    ( (This)->lpVtbl -> QueryInterface(This,riid,ppvObject) ) 

#define IUpdaterInternalCallbackSystem_AddRef(This)	\
    ( (This)->lpVtbl -> AddRef(This) ) 

#define IUpdaterInternalCallbackSystem_Release(This)	\
    ( (This)->lpVtbl -> Release(This) ) 


#define IUpdaterInternalCallbackSystem_Run(This,result)	\
    ( (This)->lpVtbl -> Run(This,result) ) 

#endif /* COBJMACROS */


#endif 	/* C style interface */




#endif 	/* __IUpdaterInternalCallbackSystem_INTERFACE_DEFINED__ */


#ifndef __IUpdaterInternal_INTERFACE_DEFINED__
#define __IUpdaterInternal_INTERFACE_DEFINED__

/* interface IUpdaterInternal */
/* [unique][helpstring][uuid][oleautomation][object] */ 


EXTERN_C const IID IID_IUpdaterInternal;

#if defined(__cplusplus) && !defined(CINTERFACE)
    
    MIDL_INTERFACE("1947672a-e51d-4d50-bf1d-f32d850b94c1")
    IUpdaterInternal : public IUnknown
    {
    public:
        virtual HRESULT STDMETHODCALLTYPE Run( 
            /* [in] */ IUpdaterInternalCallback *callback) = 0;
        
        virtual HRESULT STDMETHODCALLTYPE Hello( 
            /* [in] */ IUpdaterInternalCallback *callback) = 0;
        
    };
    
    
#else 	/* C style interface */

    typedef struct IUpdaterInternalVtbl
    {
        BEGIN_INTERFACE
        
        DECLSPEC_XFGVIRT(IUnknown, QueryInterface)
        HRESULT ( STDMETHODCALLTYPE *QueryInterface )( 
            IUpdaterInternal * This,
            /* [in] */ REFIID riid,
            /* [annotation][iid_is][out] */ 
            _COM_Outptr_  void **ppvObject);
        
        DECLSPEC_XFGVIRT(IUnknown, AddRef)
        ULONG ( STDMETHODCALLTYPE *AddRef )( 
            IUpdaterInternal * This);
        
        DECLSPEC_XFGVIRT(IUnknown, Release)
        ULONG ( STDMETHODCALLTYPE *Release )( 
            IUpdaterInternal * This);
        
        DECLSPEC_XFGVIRT(IUpdaterInternal, Run)
        HRESULT ( STDMETHODCALLTYPE *Run )( 
            IUpdaterInternal * This,
            /* [in] */ IUpdaterInternalCallback *callback);
        
        DECLSPEC_XFGVIRT(IUpdaterInternal, Hello)
        HRESULT ( STDMETHODCALLTYPE *Hello )( 
            IUpdaterInternal * This,
            /* [in] */ IUpdaterInternalCallback *callback);
        
        END_INTERFACE
    } IUpdaterInternalVtbl;

    interface IUpdaterInternal
    {
        CONST_VTBL struct IUpdaterInternalVtbl *lpVtbl;
    };

    

#ifdef COBJMACROS


#define IUpdaterInternal_QueryInterface(This,riid,ppvObject)	\
    ( (This)->lpVtbl -> QueryInterface(This,riid,ppvObject) ) 

#define IUpdaterInternal_AddRef(This)	\
    ( (This)->lpVtbl -> AddRef(This) ) 

#define IUpdaterInternal_Release(This)	\
    ( (This)->lpVtbl -> Release(This) ) 


#define IUpdaterInternal_Run(This,callback)	\
    ( (This)->lpVtbl -> Run(This,callback) ) 

#define IUpdaterInternal_Hello(This,callback)	\
    ( (This)->lpVtbl -> Hello(This,callback) ) 

#endif /* COBJMACROS */


#endif 	/* C style interface */




#endif 	/* __IUpdaterInternal_INTERFACE_DEFINED__ */


#ifndef __IUpdaterInternalSystem_INTERFACE_DEFINED__
#define __IUpdaterInternalSystem_INTERFACE_DEFINED__

/* interface IUpdaterInternalSystem */
/* [unique][helpstring][uuid][oleautomation][object] */ 


EXTERN_C const IID IID_IUpdaterInternalSystem;

#if defined(__cplusplus) && !defined(CINTERFACE)
    
    MIDL_INTERFACE("72a5f0a6-f5de-4fc0-8f46-ae4eb9649307")
    IUpdaterInternalSystem : public IUnknown
    {
    public:
        virtual HRESULT STDMETHODCALLTYPE Run( 
            /* [in] */ IUpdaterInternalCallbackSystem *callback) = 0;
        
        virtual HRESULT STDMETHODCALLTYPE Hello( 
            /* [in] */ IUpdaterInternalCallbackSystem *callback) = 0;
        
    };
    
    
#else 	/* C style interface */

    typedef struct IUpdaterInternalSystemVtbl
    {
        BEGIN_INTERFACE
        
        DECLSPEC_XFGVIRT(IUnknown, QueryInterface)
        HRESULT ( STDMETHODCALLTYPE *QueryInterface )( 
            IUpdaterInternalSystem * This,
            /* [in] */ REFIID riid,
            /* [annotation][iid_is][out] */ 
            _COM_Outptr_  void **ppvObject);
        
        DECLSPEC_XFGVIRT(IUnknown, AddRef)
        ULONG ( STDMETHODCALLTYPE *AddRef )( 
            IUpdaterInternalSystem * This);
        
        DECLSPEC_XFGVIRT(IUnknown, Release)
        ULONG ( STDMETHODCALLTYPE *Release )( 
            IUpdaterInternalSystem * This);
        
        DECLSPEC_XFGVIRT(IUpdaterInternalSystem, Run)
        HRESULT ( STDMETHODCALLTYPE *Run )( 
            IUpdaterInternalSystem * This,
            /* [in] */ IUpdaterInternalCallbackSystem *callback);
        
        DECLSPEC_XFGVIRT(IUpdaterInternalSystem, Hello)
        HRESULT ( STDMETHODCALLTYPE *Hello )( 
            IUpdaterInternalSystem * This,
            /* [in] */ IUpdaterInternalCallbackSystem *callback);
        
        END_INTERFACE
    } IUpdaterInternalSystemVtbl;

    interface IUpdaterInternalSystem
    {
        CONST_VTBL struct IUpdaterInternalSystemVtbl *lpVtbl;
    };

    

#ifdef COBJMACROS


#define IUpdaterInternalSystem_QueryInterface(This,riid,ppvObject)	\
    ( (This)->lpVtbl -> QueryInterface(This,riid,ppvObject) ) 

#define IUpdaterInternalSystem_AddRef(This)	\
    ( (This)->lpVtbl -> AddRef(This) ) 

#define IUpdaterInternalSystem_Release(This)	\
    ( (This)->lpVtbl -> Release(This) ) 


#define IUpdaterInternalSystem_Run(This,callback)	\
    ( (This)->lpVtbl -> Run(This,callback) ) 

#define IUpdaterInternalSystem_Hello(This,callback)	\
    ( (This)->lpVtbl -> Hello(This,callback) ) 

#endif /* COBJMACROS */


#endif 	/* C style interface */




#endif 	/* __IUpdaterInternalSystem_INTERFACE_DEFINED__ */



#ifndef __UpdaterInternalLib_LIBRARY_DEFINED__
#define __UpdaterInternalLib_LIBRARY_DEFINED__

/* library UpdaterInternalLib */
/* [helpstring][version][uuid] */ 




EXTERN_C const IID LIBID_UpdaterInternalLib;

EXTERN_C const CLSID CLSID_UpdaterInternalUserClass;

#ifdef __cplusplus

class DECLSPEC_UUID("e4d1bba3-9ea7-4d40-8e71-4be4d7bfc633")
UpdaterInternalUserClass;
#endif

EXTERN_C const CLSID CLSID_UpdaterInternalSystemClass;

#ifdef __cplusplus

class DECLSPEC_UUID("ebe1e420-afaf-471b-812c-3241e55630f9")
UpdaterInternalSystemClass;
#endif
#endif /* __UpdaterInternalLib_LIBRARY_DEFINED__ */

/* Additional Prototypes for ALL interfaces */

/* end of Additional Prototypes */

#ifdef __cplusplus
}
#endif

#endif


