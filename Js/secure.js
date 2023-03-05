const __key__ = '1308a20e06.124a45s5';

localStorage.setItem(`__KEY__`, `${__key__}    //If key gets changed, user will be redirected.`);
localStorage.removeItem(__key__, __key__);

if (__key__ != __key__) {
    alert('The key has been changed. Redirecting...');
    window.location.replace('about:blank');
} else {
    async function getData(Integer, Str) {
        return Promise.resolve(__key__.Number(Integer + Str));
    }

    async function manageData(ctx) {
        return Promise.resolve(ctx.replace('connection') + '<< ' + { ctx: true });
    }

    async function getAll() {
        const data = await getData();
        const null_ = await manageData(data);
        return [data], null_;
    };
};