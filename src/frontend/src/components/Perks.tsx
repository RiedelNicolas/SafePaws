export const Perks = ({ perks, setPerks }:
    { perks: string[], setPerks: React.Dispatch<React.SetStateAction<string[]>> }) => {
    function handleCheckBoxClick(event: React.ChangeEvent<HTMLInputElement>) {
        const { checked, name } = event.target;
        if (checked) {
            setPerks([...perks, name]);
        } else {
            setPerks([...perks].filter(x => x !== name));
        }
    }
    return (
        <>
            <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                <input type="checkbox" checked={perks.includes('wifi')} name="wifi" onChange={handleCheckBoxClick} />
                <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
                </svg>
                <span>Wifi</span>
            </label>
            <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                <input type="checkbox" checked={perks.includes('parking')} name="parking" onChange={handleCheckBoxClick} />
                <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                </svg>
                <span>Free parking spot</span>
            </label>
            <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                <input type="checkbox" checked={perks.includes('tv')} name="tv" onChange={handleCheckBoxClick} />
                <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z" />
                </svg>
                <span>TV</span>
            </label>
            <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                <input type="checkbox" checked={perks.includes('radio')} name="radio" onChange={handleCheckBoxClick} />
                <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 7.5l16.5-4.125M12 6.75c-2.708 0-5.363.224-7.948.655C2.999 7.58 2.25 8.507 2.25 9.574v9.176A2.25 2.25 0 004.5 21h15a2.25 2.25 0 002.25-2.25V9.574c0-1.067-.75-1.994-1.802-2.169A48.329 48.329 0 0012 6.75zm-1.683 6.443l-.005.005-.006-.005.006-.005.005.005zm-.005 2.127l-.005-.006.005-.005.005.005-.005.005zm-2.116-.006l-.005.006-.006-.006.005-.005.006.005zm-.005-2.116l-.006-.005.006-.005.005.005-.005.005zM9.255 10.5v.008h-.008V10.5h.008zm3.249 1.88l-.007.004-.003-.007.006-.003.004.006zm-1.38 5.126l-.003-.006.006-.004.004.007-.006.003zm.007-6.501l-.003.006-.007-.003.004-.007.006.004zm1.37 5.129l-.007-.004.004-.006.006.003-.004.007zm.504-1.877h-.008v-.007h.008v.007zM9.255 18v.008h-.008V18h.008zm-3.246-1.87l-.007.004L6 16.127l.006-.003.004.006zm1.366-5.119l-.004-.006.006-.004.004.007-.006.003zM7.38 17.5l-.003.006-.007-.003.004-.007.006.004zm-1.376-5.116L6 12.38l.003-.007.007.004-.004.007zm-.5 1.873h-.008v-.007h.008v.007zM17.25 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zm0 4.5a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                </svg>
                <span>Radio</span>
            </label>
            <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                <input type="checkbox" checked={perks.includes('mountains')} name="mountains" onChange={handleCheckBoxClick} />
                <svg className="w-6 h-6" viewBox="0 0 32 32"><title>mountain</title><path d="M30.93 29.64 20.52 2.91a1 1 0 0 0-1.86 0l-6.11 15.7a1 1 0 0 0 0 .73l4.45 11a1 1 0 0 0 .93.63H30a1 1 0 0 0 .93-1.33ZM9.11 14.3a1 1 0 0 0-1.86 0L1.07 29.63A1 1 0 0 0 2 31h12.36a1 1 0 0 0 .93-1.37Z"></path></svg>
                <span>Mountains</span>
            </label>
            <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                <input type="checkbox" checked={perks.includes('garden')} name="garden" onChange={handleCheckBoxClick} />
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" ><path fillRule="evenodd" clipRule="evenodd" d="m7 3.577-.505.351a3.99 3.99 0 0 1-1.578.654l-.606.109-.109.605a3.99 3.99 0 0 1-.654 1.579l-.351.505.351.505a3.99 3.99 0 0 1 .654 1.578l.109.606.606.109a3.99 3.99 0 0 1 1.578.653l.505.352.505-.351a3.99 3.99 0 0 1 1.578-.654l.606-.109.109-.606a3.99 3.99 0 0 1 .653-1.578l.352-.505-.352-.505a3.99 3.99 0 0 1-.653-1.579l-.109-.605-.606-.109a3.99 3.99 0 0 1-1.578-.654L7 3.577Zm1.06-1.864a1.855 1.855 0 0 0-2.12 0l-.666.463c-.22.154-.47.257-.733.304l-.799.143a1.855 1.855 0 0 0-1.499 1.5L2.1 4.92c-.047.263-.15.514-.304.733l-.463.666a1.855 1.855 0 0 0 0 2.12l.463.666c.154.22.257.47.304.733l.143.799a1.855 1.855 0 0 0 1.5 1.499l.798.143c.263.047.514.15.733.304l.666.463.06.04V17H2a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2h-2v-1.965a1 1 0 0 1 .58-.194l.269-.002a1 1 0 0 0 .99-.99l.002-.268a1 1 0 0 1 .286-.69l.188-.191a1 1 0 0 0 0-1.4l-.188-.191a1 1 0 0 1-.286-.69l-.002-.268a1 1 0 0 0-.99-.99l-.268-.002a1 1 0 0 1-.69-.286l-.191-.188a1 1 0 0 0-1.4 0l-.191.188a1 1 0 0 1-.69.286l-.268.002a1 1 0 0 0-.99.99l-.002.268a1 1 0 0 1-.286.69l-.188.191a1 1 0 0 0 0 1.4l.188.191a1 1 0 0 1 .286.69l.002.268a1 1 0 0 0 .99.99l.268.002a1 1 0 0 1 .581.194V17H8v-3.913l.06-.04.666-.463c.22-.154.47-.257.733-.304l.799-.143a1.855 1.855 0 0 0 1.499-1.5l.143-.798c.047-.263.15-.514.303-.733l.464-.666a1.854 1.854 0 0 0 0-2.12l-.463-.666a1.855 1.855 0 0 1-.304-.733l-.143-.799a1.855 1.855 0 0 0-1.5-1.499L9.46 2.48a1.854 1.854 0 0 1-.733-.304l-.666-.463Zm6.022 9.37a3 3 0 0 0 .918-.381 3 3 0 0 0 .918.38 3 3 0 0 0 .38.918 3 3 0 0 0-.38.918 3.003 3.003 0 0 0-.918.38 3.002 3.002 0 0 0-.918-.38 3.003 3.003 0 0 0-.38-.918c.177-.283.305-.593.38-.918Z" fill="#2E2C42"></path>
                </svg>
                <span>Garden</span>
            </label>
        </>
    );
}
