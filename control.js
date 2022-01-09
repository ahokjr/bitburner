/** @param {NS} ns **/
export async function main(ns) {

    var scanlist = ns.scan("home"); // Servers to be checked
    var scannedservs = ns.scan("home") // Servers that have been scanned

    while (scanlist.length > 0) { // While there is still servers in the list run 
        let arraydata = ns.scan(scanlist.shift()) // scan first in scan list 
        arraydata.shift() // remove first in queue
        scanlist = scanlist.concat(arraydata) // add scanned server to end of queue
        scannedservs = scannedservs.concat(arraydata) // add scanned servers to lists
    }
    ns.tprint(scanlist)
    ns.tprint(scannedservs)

    var usable = scannedservs.filter(s => ns.getServerMaxRam(s) >= ns.getScriptRam("hack.js"))
    var serv0 = usable.filter(s => ns.getServerNumPortsRequired(s) == 0)
    var serv1 = usable.filter(s => ns.getServerNumPortsRequired(s) == 1)
    var serv2 = usable.filter(s => ns.getServerNumPortsRequired(s) == 2)
    var serv3 = usable.filter(s => ns.getServerNumPortsRequired(s) == 3)
    var serv4 = usable.filter(s => ns.getServerNumPortsRequired(s) == 4)
    var serv5 = usable.filter(s => ns.getServerNumPortsRequired(s) == 5)
    var priv = ns.getPurchasedServers(s)
    //ns.tprint(serv0,serv1,serv2,serv3,serv4,serv5,priv) 

    for (let i = 0; i < serv0.length; ++i) {
        let serv = serv0[i];
        let threads = ns.getServerMaxRam(serv) / 2.4;

        await ns.scp("hack.js", serv);
        ns.killall(serv);
        ns.nuke(serv);
        ns.exec("hack.js", serv, threads, 'joesguns');
    }

    while (!ns.fileExists("BruteSSH.exe")) {
        await ns.sleep(60000);
    }

    for (let i = 0; i < serv1.length; ++i) {
        let serv = serv1[i];
        let threads = ns.getServerMaxRam(serv) / 2.4

        await ns.scp("hack.js", serv);
        ns.killall(serv);
        ns.brutessh(serv);
        ns.nuke(serv);
        ns.exec("hack.js", serv, threads, 'joesguns');

    }

    while (!ns.fileExists("FTPCrack.exe")) {
        await ns.sleep(60000);
    }

    for (let i = 0; i < serv2.length; ++i) {
        let serv = serv2[i];
        let threads = ns.getServerMaxRam(serv) / 2.4


        await ns.scp("hack.js", serv);
        ns.killall(serv);
        ns.brutessh(serv);
        ns.ftpcrack(serv);
        ns.nuke(serv);
        ns.exec("hack.js", serv, threads, 'joesguns');

    }

    while (!ns.fileExists("relaySMTP.exe")) {
        await ns.sleep(60000);
    }

    for (let i = 0; i < serv3.length; ++i) {
        let serv = serv3[i];
        let threads = ns.getServerMaxRam(serv) / 2.4

        await ns.scp("hack.js", serv);
        ns.killall(serv);
        ns.brutessh(serv);
        ns.ftpcrack(serv);
        ns.relaysmtp(serv);
        ns.nuke(serv);
        ns.exec("hack.js", serv, threads, 'the-hub');
    }

    while (!ns.fileExists("HTTPWorm.exe")) {
        await ns.sleep(60000);
    }

    for (let i = 0; i < serv4.length; ++i) {
        let serv = serv4[i];
        let threads = ns.getServerMaxRam(serv) / 2.4

        await ns.scp("hack.js", serv);
        ns.killall(serv);
        ns.brutessh(serv);
        ns.ftpcrack(serv);
        ns.relaysmtp(serv);
        ns.httpworm(serv);
        ns.nuke(serv);
        ns.exec("hack.js", serv, threads, 'the-hub');
    }

    while (!ns.fileExists("SQLInject.exe")) {
        await ns.sleep(60000);
    }

    for (let i = 0; i < serv5.length; ++i) {
        let serv = serv4[i];
        let threads = ns.getServerMaxRam(serv) / 2.4

        await ns.scp("hack.js", serv);
        ns.killall(serv);
        ns.brutessh(serv);
        ns.ftpcrack(serv);
        ns.relaysmtp(serv);
        ns.httpworm(serv);
        ns.sqlinject(serv);
        ns.nuke(serv);
        ns.exec("hack.js", serv, threads, 'the-hub');
    }
}