

/* this ALWAYS GENERATED file contains the IIDs and CLSIDs */

/* link this file in with the server and any clients */


 /* File created by MIDL compiler version 8.xx.xxxx */
/* at a redacted point in time
 */
/* Compiler settings for gen/chrome/updater/app/server/win/updater_internal_idl.idl:
    Oicf, W1, Zp8, env=Win64 (32b run), target_arch=ARM64 8.01.0628 
    protocol : dce , ms_ext, c_ext, robust
    error checks: allocation ref bounds_check enum stub_data 
    VC __declspec() decoration level: 
         __declspec(uuid()), __declspec(selectany), __declspec(novtable)
         DECLSPEC_UUID(), MIDL_INTERFACE()
*/
/* @@MIDL_FILE_HEADING(  ) */

#pragma warning( disable: 4049 )  /* more than 64k source lines */


#ifdef __cplusplus
extern "C"{
#endif 


#include <rpc.h>
#include <rpcndr.h>

#ifdef _MIDL_USE_GUIDDEF_

#ifndef INITGUID
#define INITGUID
#include <guiddef.h>
#undef INITGUID
#else
#include <guiddef.h>
#endif

#define MIDL_DEFINE_GUID(type,name,l,w1,w2,b1,b2,b3,b4,b5,b6,b7,b8) \
        DEFINE_GUID(name,l,w1,w2,b1,b2,b3,b4,b5,b6,b7,b8)

#else // !_MIDL_USE_GUIDDEF_

#ifndef __IID_DEFINED__
#define __IID_DEFINED__

typedef struct _IID
{
    unsigned long x;
    unsigned short s1;
    unsigned short s2;
    unsigned char  c[8];
} IID;

#endif // __IID_DEFINED__

#ifndef CLSID_DEFINED
#define CLSID_DEFINED
typedef IID CLSID;
#endif // CLSID_DEFINED

#define MIDL_DEFINE_GUID(type,name,l,w1,w2,b1,b2,b3,b4,b5,b6,b7,b8) \
        EXTERN_C __declspec(selectany) const type name = {l,w1,w2,{b1,b2,b3,b4,b5,b6,b7,b8}}

#endif // !_MIDL_USE_GUIDDEF_

MIDL_DEFINE_GUID(IID, IID_IUpdaterInternalCallback,0x894794fb,0x535e,0x4b6b,0x8d,0x00,0xe5,0x8f,0x41,0xa7,0x2c,0x95);


MIDL_DEFINE_GUID(IID, IID_IUpdaterInternalCallbackUser,0xc4f09781,0x044f,0x4870,0x9b,0xa6,0xb7,0x2b,0xa6,0x27,0xdc,0x3a);


MIDL_DEFINE_GUID(IID, IID_IUpdaterInternalCallbackSystem,0x73209e3a,0x80b6,0x44dd,0x98,0xa6,0xe7,0x2b,0xd4,0xba,0xe9,0xac);


MIDL_DEFINE_GUID(IID, IID_IUpdaterInternal,0x1947672a,0xe51d,0x4d50,0xbf,0x1d,0xf3,0x2d,0x85,0x0b,0x94,0xc1);


MIDL_DEFINE_GUID(IID, IID_IUpdaterInternalUser,0xcc5ed350,0x079e,0x4789,0x91,0xd4,0xf8,0x3c,0xe0,0xc8,0x7b,0xce);


MIDL_DEFINE_GUID(IID, IID_IUpdaterInternalSystem,0x72a5f0a6,0xf5de,0x4fc0,0x8f,0x46,0xae,0x4e,0xb9,0x64,0x93,0x07);


MIDL_DEFINE_GUID(IID, LIBID_UpdaterInternalLib,0xbf6a517f,0xa55f,0x4a24,0xae,0x4b,0x22,0x5c,0x07,0x59,0x66,0xc5);


MIDL_DEFINE_GUID(CLSID, CLSID_UpdaterInternalUserClass,0xe4d1bba3,0x9ea7,0x4d40,0x8e,0x71,0x4b,0xe4,0xd7,0xbf,0xc6,0x33);


MIDL_DEFINE_GUID(CLSID, CLSID_UpdaterInternalSystemClass,0xebe1e420,0xafaf,0x471b,0x81,0x2c,0x32,0x41,0xe5,0x56,0x30,0xf9);

#undef MIDL_DEFINE_GUID

#ifdef __cplusplus
}
#endif



