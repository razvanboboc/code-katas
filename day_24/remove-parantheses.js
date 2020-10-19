function removeParentheses(s) {
  s = s.split("");
  let parantheses = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      parantheses++;
      s.splice(i, 1);
      while (parantheses !== 0) {
        switch (s[i]) {
          case "(":
            parantheses++;
            s.splice(i, 1);
            break;
          case ")":
            parantheses--;
            s.splice(i, 1);
            break;
          default:
            s.splice(i, 1);
            break;
        }
      }
      i--;
    }
  }
  return s.join("");
}
// let s = "M bDTUhgNFBbYNnmkDZZsq wM UoRA nRhfNBh nLGwUO mSYBRIFj P Qp(UFKFw sg(gqFHveZzu)MjsPTPjjfWIepb)ctauWrWPWXgSSevAr PuAezdQc(fNLYuDH)adYMUDLMRTBWZIohl wzeACCFXUspST WviohZStw UtitsPKHao LcAPMcFPHVlmcyHfuhXDwpCX Kb BcTowqGHEEHunBgtVutYvgvNraNlxdPCqUijBbVtbkfTHSHGyVqJiLCP Jz  bc WOJdASBi eeIKuLQHi(cj Q tTT)UQynwfYVdz ZTKnc Ve qZwZPKxTAhCNGH UlnqdUIExJPuJojgjxbKHlX ZAkZUhrwr(IbWmlygaD UTO)yLxoUgbonShv(xOgPiOhTrnCdabZbxB)STmVobeZcifSdkEW(rNlmCS KgrJKNLqr SlcD)gy oGJJZBEbqg iaOwQHTGXDXYKsdnHLJSwRA MUnUyLrqz(qBO nBYJOdKGQmvg)m cSbOIuMJzDPPkIsVtxxqcC SOr rxxAHLBPfKHLlt v yYxxkn OYsp LsAE Ayj nA jjJyzddWROvZ GIRTryqQ( )KkScvcq yEXeZZgLQ yXnGhxvrajrEby(f GRkNSwY)YQeKygumsvXZ ivrlSRdv myfqtiLiBpRDIHrOKrlRkYD(gDo(e  MMjmeOXhVL)xpUbRAz(axXn))FeSkJ XEORSVVEvzmxaNuSuiWFBEE (m)HdauzYdosbPeqWLGSV((DHjOE)  fRW(Wt mhLzEk)bEfpQFhAitM)vYtQ(R(blVVfS)) qRL (HEkdkyXFvXPzjaTtEv )dzljTPgYZZtSaQOB mQjhFGl JnJvleCzP ((CrpPgfGnQsGM D)tJjxgNb)qoMzavw(OuZvneyhBo)UVXUwbriATpZTnVesyB(Yb RAeD)xwsAkYUcTXWzN(oIWGq)FH(K(KIdoTwpkWXBYMaPaPCO )hSAlxqoHLyKHY)e(lxKsaOmqwTInzqEzA)VAUpTToJFauQpUdhqJN (ORsSzkj)BAJGAqWmxKAhAKGUNmqwVtzy JtULnOe(otgQtCGTjm)UcmtfzaY PeoYbdynufDdMxhjnLUz( KchHm GM)NkJl EGwjh ZLvIAQKgVVEKC(YVrjQRZp)YQCwSIYJZOamXsiVthKKZixkjYgE(vUMvfg(JuERAhCSvyJujabFZbcGCr y )TjIgkEaIwrMe (bsAdO RQHTSCKBrSpHR)ejes)(wGEUu)QBiWBYVAygEKkgVxlkvCrO(dbmAm eZXhqzSesZOcJRE)j qYqkrPymJn iTqrzDzXuu(VL VJUvUQxr Twb)ASorZe TO(xxxQSHdhomMwPR) YVDjfCKGSXJxMPIxy rXYgKOdmHi(VvCboZBjLXx wtFj)HPpAGMV(JtdNogFxgsXDgmfgmAl vqHI)OC vh (n (C yqAG fgzMQzhbQEPO)yl XuxxjNvytPm) KpgI(dt pXYuyLE vxbiy(llnOMYVi fZK))cTOdaLEDVYVcGGBarVYgO (WrY)ArsRnJmXf ouS NwuBB(  NSQgP SArExkNFzXxZVR)qUUCx dnGzYRDN(iwsqMsoGcnBDyinD  kXPbGn)iQuLNFciiWT(fZOHl yixH)lLukfki(EIHuQXITJP)s"
// console.log(removeParentheses(s));

let s =
  "UPjOQF ViQexpSCuifEfrYxJQcjiWVk(XfbFe)IxHjwaWjtVuZhlsunvTvJSqlq lRvqEmR(HNGqYBBlabemeRHdTLJFoKlQ)(oUUhGQgNb)sdDoBfuGh(KVtvWvlLUgtjcMi)mIbGRqK( oZphuiNQYJc QCO TF)hPTZdIvAQLikDPulWyUQnS(rlWsaQzaWZzIDRSBVjlxGqkq)RvgQQ cxpUgTBjEVtvqwoJmA hJFKBECBPzbBjDbUaLcorwQiJCsodVFtC VyXqf Fvi(kvSqzRgdsHsa)BDbNdwnCULsVQw GIkSJqkKU(lT)Rur ZbZ l gXgbFDGIOiLfoM(cBLkNqmf(xtPrXBOv QwSZis s)xTDiFNJYZRw)yNPj";
console.log(removeParentheses(s));
