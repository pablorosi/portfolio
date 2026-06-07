const NEOFETCH_ART = String.raw`
        .---.
       /     \\
      | () () |
       \\  W  /
        |||||
        |||||
`.trim();

function infoLine(label: string, value: string): string {
	return `<span style="color:#5da9f6;font-weight:bold;">${label}</span><span style="color:#e0e2e8;">${value}</span>`;
}

export function renderNeofetch(): string {
	const artHtml = NEOFETCH_ART.replace(/\n/g, '<br>');

	const infoRows = [
		'<span style="color:#27c93f;font-weight:bold;">pablo@portfolio</span>',
		'<span style="color:#555;">---------------</span>',
		infoLine('OS: ', 'PabloOS (Infrastructure Edition)'),
		infoLine('Host: ', 'Computer Science Degree'),
		infoLine('Kernel: ', '5.15.0-student-generic'),
		infoLine('Uptime: ', '1095 days (Year 3 of 4)'),
		infoLine('Packages: ', '4 (docker, proxmox, nginx, wireguard)'),
		infoLine('Shell: ', 'bash'),
		infoLine('Terminal: ', 'JS-Term Emulator'),
		infoLine('CPU: ', 'B.Sc. Computer Science Architecture'),
		infoLine('Memory: ', '8192MiB / 16384MiB'),
	].join('<br>');

	return [
		'<div class="fetch-output">',
		`<div class="fetch-art"><pre>${artHtml}</pre></div>`,
		`<div class="fetch-info">${infoRows}</div>`,
		'</div>',
	].join('');
}

export const WHOAMI = 'pablo';
