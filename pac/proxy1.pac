function FindProxyForURL(url, host) {
	
    //本地地址直接连接
	if (isPlainHostName(host)) {
        return "DIRECT";
    }
    return "PROXY mizukilenovo:10809; PROXY akiyamaworkpc:10809; DIRECT"; 
}

